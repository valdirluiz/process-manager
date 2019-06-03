package br.com.valdirluiz.user;

import java.util.List;

import javax.enterprise.context.ApplicationScoped;
import javax.transaction.Transactional;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.Response;

import org.jboss.resteasy.annotations.jaxrs.PathParam;

import io.quarkus.panache.common.Sort;

@Path("users")
@ApplicationScoped
@Produces("application/json")
@Consumes("application/json")
public class UserResource {

	@GET
	public List<User> get() {
		return User.listAll(Sort.by("name"));
	}

	@GET
	@Path("{id}")
	public User getSingle(@PathParam Long id) {
		User entity = User.findById(id);
		if (entity == null) {
			throw new WebApplicationException("User with id of " + id + " does not exist.", 404);
		}
		return entity;
	}

	@POST
	@Transactional
	public Response create(User user) {
		if (user.id != null) {
			throw new WebApplicationException("Id was invalidly set on request.", 422);
		}

		user.persist();
		return Response.ok(user).status(201).build();
	}

	@PUT
	@Path("{id}")
	@Transactional
	public User update(@PathParam Long id, User user) {
		if (user.name == null) {
			throw new WebApplicationException("User Name was not set on request.", 422);
		}

		User entity = User.findById(id);

		if (entity == null) {
			throw new WebApplicationException("User with id of " + id + " does not exist.", 404);
		}

		entity.name = user.name;

		return entity;
	}

	@DELETE
	@Path("{id}")
	@Transactional
	public Response delete(@PathParam Long id) {
		User entity = User.findById(id);
		if (entity == null) {
			throw new WebApplicationException("User with id of " + id + " does not exist.", 404);
		}
		entity.delete();
		return Response.status(204).build();
	}

}