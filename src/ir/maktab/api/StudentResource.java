package ir.maktab.api;

import ir.maktab.DAO.Student.StudentDao;
import ir.maktab.DAO.Student.StudentDaoImpl;
import ir.maktab.model.Student;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.sql.SQLException;
import java.util.List;

/**
 * Created by nader on 12/9/2017.
 */

@Path("/students")
public class StudentResource {
    private StudentDao studentDao = new StudentDaoImpl();

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Student> getAll() throws SQLException {
        return studentDao.getAll();
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Student get(@PathParam("id") Integer id) throws SQLException {
        return studentDao.get(id);
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public boolean add(Student student) throws SQLException {
        return studentDao.add(student);
    }

    @PUT
    @Path("/{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    public boolean update(@PathParam("id") Integer id, Student student) throws SQLException {
        student.setId(id);
        return studentDao.edit(student);
    }

    @DELETE
    public int delete() throws SQLException {
        return studentDao.deleteAll();
    }

    @DELETE
    @Path("/{id}")
    public boolean delete(@PathParam("id") Integer id) throws SQLException {
        return studentDao.delete(id);
    }

}
