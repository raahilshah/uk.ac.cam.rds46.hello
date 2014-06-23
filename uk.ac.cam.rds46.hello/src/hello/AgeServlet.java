package hello;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class AgeServlet
 */
@WebServlet("/ageform")
public class AgeServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AgeServlet() {
        super();
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		int[] days = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
		String name = request.getParameter("name");
		try {
			int day = Integer.parseInt(request.getParameter("day")),
				month = Integer.parseInt(request.getParameter("month")),
				year = Integer.parseInt(request.getParameter("year"));
			if (year <= 0 || year > 2014) throw new NumberFormatException();
			if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) days[1] = 29;
			if (month <= 0 || month > 12) throw new NumberFormatException();
			if (day <= 0 || day > days[month - 1]) throw new NumberFormatException();
			
			Date today = new Date();
			Date birthday = new Date(year - 1900, month - 1, day);
			if (birthday.after(today)) throw new NumberFormatException();
			
			int dow = birthday.getDay();
			int y = today.getYear() + 1900, m = today.getMonth() + 1, d = today.getDate();
			int dy = y - year, dm = m - month, dd = d - day;
			if (dd < 0) {
				dd = days[(month - 2) % 12] + dd;
				dm--;
			}
			if (dm < 0) {
				dm = 12 + dm;
				dy--;
			}
			out.println("Hi " + name.substring(0, name.indexOf(' ')) + ", you are " +
					(dy == 0 ? "" : dy + " year(s) ") +
					(dm == 0 ? "" : dm + " month(s) ") +
					(dd == 0 ? "" : dd + " day(s) ") +
					"old.");
			
		}
		catch (NumberFormatException nfe) {
			out.println("Error, incorrect date entered.");
			out.close();
		}
		out.close();
		
	}

}
