const express = require("express");
const app = express();
const cors =require("cors");
const pool = require("./db");
const { response } = require("express");

app.use(cors());
app.use(express.json());//req.body

// route

//create form
app.post("/letterdt",async (req,res)=>{

    try {
        // console.log(req.body);
        const {l_name, Company_Name,C_ress_line1 ,C_Address_Line2,c_City,C_Email_ress,P_Employees_Name,P_Employees_Email,Offer_Date,Direct_Report,Office_Location,Paid_Method,Stock_opttion,Offer_EP_datte,Anticipated_date,Company_Signer,Signer_Title,Signer_Email,Prepairs_Email}= req.body;
        const newletterdt = await pool.query(
            "INSERT INTO letterdt (l_name, Company_Name,C_ress_line1 ,C_Address_Line2,c_City,C_Email_ress,P_Employees_Name,P_Employees_Email,Offer_Date,Direct_Report,Office_Location,Paid_Method,Stock_opttion,Offer_EP_datte,Anticipated_date,Company_Signer,Signer_Title,Signer_Email,Prepairs_Email) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19) RETURNING *",
            [l_name, Company_Name,C_ress_line1 ,C_Address_Line2,c_City,C_Email_ress,P_Employees_Name,P_Employees_Email,Offer_Date,Direct_Report,Office_Location,Paid_Method,Stock_opttion,Offer_EP_datte,Anticipated_date,Company_Signer,Signer_Title,Signer_Email,Prepairs_Email ]
        );
        res.json(newletterdt.rows[0]);
        // console.log(newletterdt.rows[0]) ;
        // console.log(res.json);
        
        
    } catch (error) {
        console.log(error.message);

        
    }
});

// get all form 
app.get("/letterdt", async (req, res) => {
    try {
      const allletter = await pool.query("SELECT * FROM letterdt");
      // console.log(allletter.rows)
      res.json(allletter.rows);

    } catch (error) {
      console.error(error.message);
    }
  });


// get form a data

app.get("/getone/:id", async (req, res) => {
    try {
      const { id } = req.params;
      // console.log(id);
      const getone = await pool.query("SELECT * FROM letterdt WHERE l_id = $1", [
        id
      ]);

  
      res.json(getone.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });

  //Delete Offer
  app.delete("/delete/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteletter = await pool.query("DELETE FROM letterdt WHERE l_id = $1", [
        id
      ]);
      console.log(id);
      res.json("letter was deleted!");
    } catch (err) {
      console.log(err.message);
    }
  });

  // GET LAST INDEX
  app.get("/getlastindex", async (req, res) => {
    try {
      const { id } = req.params;
      // console.log(id);
      const todo = await pool.query("SELECT * FROM letterdt ORDER BY l_id DESC LIMIT 1");

      res.json(todo.rows[0]);
      // console.log(todo.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });



  // update data

  app.put("/update", async (req, res) => {
   
    try {
      
      const {l_name,company_name,c_ress_line1,c_address_line2,c_city,c_email_ress,p_employees_name,p_employees_email,offer_date,direct_report,office_location,paid_method,stock_opttion,offer_ep_datte,anticipated_date,company_signer,signer_title,signer_email,prepairs_email,l_id}= req.body;
      console.log(company_name);
      const updateletter = await pool.query(
        "UPDATE letterdt SET l_name=$1, company_name=$2 ,c_ress_line1=$3,c_address_line2=$4,c_city=$5,c_email_ress=$6,p_employees_name=$7,p_employees_email=$8,offer_date=$9,direct_report=$10,office_location=$11,paid_method=$12, stock_opttion=$13,offer_ep_datte=$14,anticipated_date=$15,company_signer=$16,signer_title=$17,signer_email=$18,prepairs_email=$19 WHERE  l_id = $20",
        [l_name,company_name,c_ress_line1,c_address_line2,c_city,c_email_ress,p_employees_name,p_employees_email,offer_date,direct_report,office_location,paid_method,stock_opttion,offer_ep_datte,anticipated_date,company_signer,signer_title,signer_email,prepairs_email,l_id]
      );
  
      res.json("letterdt was updated!");
    } catch (err) {
      console.error(err.message);
    }
  });


app.listen(5000,() =>{
    console.log("app server is start on port 5000")

});
