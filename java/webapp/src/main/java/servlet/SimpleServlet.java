package servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.rmi.ServerException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Recipe 1-2: Developing Servlet
 * 
 * @author Magyari Zoltán
 */
    public class SimpleServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;

	/**
	 * Processes requests for both HTTP <code>GET</code> and
	 * <code>POST</code> methods.
	 */
	protected void processRequest(HttpServletRequest request, HttpServletResponse response) throws ServerException, IOException {
		response.setContentType("text/html;charset=UTF-8");
		PrintWriter out = response.getWriter();
		try {
			out.println("<html>");
			out.println("<head>");
			out.println("<title>Servlet SimpleServlet</title>");
			out.println("</head>");
			out.println("<body>");
			out.println("<h2>Servlet SimpleServlet at " + request.getContextPath() + " </h2>");
			out.println("<br/>Welcome to Java EE Recepies!");
			out.println("</body>");
			out.println("</html>");
		} finally {
			out.close();
		}
	}

	/**
	 * Handles the HTTP GET
	 */
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
		throws ServletException, IOException {
		processRequest(request, response);
	}
	/**
	 * Handles the HTTP POST
	 */
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
		throws ServletException, IOException {
		processRequest(request, response);
	}
	
	/**
	 * Returns a short description of the servlet for documentation purposes.
	 */
	@Override
	public String getServletInfo() {
		return "Short description";
	}
}
