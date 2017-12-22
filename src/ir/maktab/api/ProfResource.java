package ir.maktab.api;

import ir.maktab.DAO.Prof.ProfDao;
import ir.maktab.DAO.Prof.ProfDaoImpl;
import ir.maktab.model.Prof;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.sql.SQLException;
import java.util.List;

/**
 * Created by nader on 12/10/2017.
 */

@Path("/profs")
public class ProfResource {
    private ProfDao profDao = new ProfDaoImpl();

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Prof> getAll() throws SQLException {
        return profDao.getAll();
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Prof get(@PathParam("id") Integer id) throws SQLException {
        return profDao.get(id);
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public boolean add(Prof prof) throws SQLException {
        return profDao.add(prof);
    }

    @PUT
    @Path("/{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    public boolean update(@PathParam("id") Integer id, Prof prof) throws SQLException {
        prof.setId(id);
        return profDao.edit(prof);
    }

    @DELETE
    public int delete() throws SQLException {
        return profDao.deleteAll();
    }

    @Path("/{id}")
    @DELETE
    public boolean delete(@PathParam("id") Integer id) throws SQLException {
        return profDao.delete(id);
    }
}
