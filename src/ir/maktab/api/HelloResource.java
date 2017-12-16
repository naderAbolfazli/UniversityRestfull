package ir.maktab.api;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

/**
 * Created by nader on 12/9/2017.
 */
@Path("/helloworld")
public class HelloResource {
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("hi/{last-name}")
    public String sayHello(@QueryParam("name") String name, @PathParam("last-name") String lastName){
        return "Hello "+name+" "+lastName;
    }

}
