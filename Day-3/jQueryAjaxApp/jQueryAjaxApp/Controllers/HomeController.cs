using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Web;
using System.Web.Mvc;

namespace jQueryAjaxApp.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/

        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Add(int number1, int number2)
        {
            Thread.Sleep(5000);
            return Json(new {number1 = number1, number2 = number2, result = number1 + number2},JsonRequestBehavior.DenyGet);
        }

    }
}
