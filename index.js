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
        console.log(req.body);
        const {l_name, Company_Name,C_ress_line1 ,C_Address_Line2,c_City,C_Email_ress,P_Employees_Name,P_Employees_Email,Offer_Date,Direct_Report,Office_Location,Paid_Method,Stock_opttion,Offer_EP_datte,Anticipated_date,Company_Signer,Signer_Title,Signer_Email,Prepairs_Email}= req.body;
        const newletterdt = await pool.query(
            "INSERT INTO letterdt (l_name, Company_Name,C_ress_line1 ,C_Address_Line2,c_City,C_Email_ress,P_Employees_Name,P_Employees_Email,Offer_Date,Direct_Report,Office_Location,Paid_Method,Stock_opttion,Offer_EP_datte,Anticipated_date,Company_Signer,Signer_Title,Signer_Email,Prepairs_Email) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19) RETURNING *",
            [l_name, Company_Name,C_ress_line1 ,C_Address_Line2,c_City,C_Email_ress,P_Employees_Name,P_Employees_Email,Offer_Date,Direct_Report,Office_Location,Paid_Method,Stock_opttion,Offer_EP_datte,Anticipated_date,Company_Signer,Signer_Title,Signer_Email,Prepairs_Email ]
        );
        res.json(newletterdt.rows[0]);
        console.log(newletterdt) ;
        console.log(res.json);
        
        
    } catch (error) {
        console.log(error.message);

        
    }
});

// get all form 
app.get("/letterdt", async (req, res) => {
    try {
      const allletter = await pool.query("SELECT * FROM letterdt");
      console.log(allletter.rows)
      res.json(allletter.rows);

    } catch (error) {
      console.error(error.message);
    }
  });


// get form a data

app.get("/letterdt/:id", async (req, res) => {
    try {
      const { id } = req.params;
      console.log(id);
      const todo = await pool.query("SELECT * FROM letterdt WHERE l_id = $1", [
        id
      ]);

  
      res.json(todo.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });


app.listen(5000,() =>{
    console.log("app server is start on port 5000")

});
