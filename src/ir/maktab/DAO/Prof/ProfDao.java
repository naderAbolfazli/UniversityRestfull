package ir.maktab.DAO.Prof;

import ir.maktab.model.Prof;
import ir.maktab.model.Student;

import javax.swing.table.DefaultTableModel;
import java.sql.SQLException;
import java.util.List;

/**
 * Created by nader on 12/2/2017.
 */
public interface ProfDao {

    boolean add(Prof p) throws SQLException;

    boolean edit(Prof p) throws SQLException;

    Prof get(int id) throws SQLException;

    List<Prof> getAll() throws SQLException;

    DefaultTableModel getAllAsModel() throws SQLException;

    DefaultTableModel getAsModel(Prof p) throws SQLException;

    List<Student> showStudents(int id);

    boolean exist(Prof p) throws SQLException;

    int searchByName(String profName) throws SQLException;

    boolean delete(int id) throws SQLException;

    boolean delete(String pfName) throws SQLException;

    int deleteAll() throws SQLException;

}
