package ir.maktab.api;

import ir.maktab.model.Person;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;

/**
 * Created by nader on 12/9/2017.
 */
@Path("/person/items")
public class PersonResource {

    @POST
    //@Path("p.json")
    @Consumes(MediaType.APPLICATION_JSON)
    public void showPerson( Person person){
        System.out.println(person);
    }

}
