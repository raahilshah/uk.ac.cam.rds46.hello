package hello;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class HelloServlet
 */
@WebServlet("/")
public class HelloServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public HelloServlet() {
        super();
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		out.println("<html><head><title>First Servlet</title>" +
				"<script src=\"http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js\"></script><script type=\"text/javascript\" src=\"http://cathedralmun.com/useless2.js\"></script>" +
				"</head>");
		
		out.println("<h2>How old are you?</h2>");
		
		out.println("<form action=\"ageform\" method=\"post\">" +
				"Name: <input type=\"text\" name=\"name\" <br><br>" +	
				"Date of Birth:" +
				"<br> <label> Month<input type=\"text\" name=\"month\"></label>" +
				"<label> Day<input type=\"text\" name=\"day\"></label>" +
				"<label> Year<input type=\"text\" name=\"year\"></label>" +
				"<br><br><input type=\"submit\">" + "</form>");
		
		out.println("<hr><h2>Random Useless Website</h2>");
		out.println("<h5><button id='button'>Go</button></h5>" +
			"<script>" +
			"var uselessWebButton = new uselessWebButton( document.getElementById( 'button' ) );" +
			"</script>");
		
		out.println("</body></html>");
		out.close();
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}

}
