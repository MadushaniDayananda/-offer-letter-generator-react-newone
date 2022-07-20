CREATE DATABASE offeringletter;

CREATE TABLE letterdetails(l_id SERIAL PRIMARY KEY,l_name VARCHAR(255),Company_Name VARCHAR(255),C_ress_line1 VARCHAR(255),c_City VARCHAR(255),C_Address_Line2 VARCHAR(255),C_Email_ress VARCHAR(255),P_Employees_Name VARCHAR(255),P_Employees_Email VARCHAR(255),Offer_Date date,Direct_Report VARCHAR(255),Office_Location VARCHAR(255),Paid_Method VARCHAR(255),Stock_opttion VARCHAR(255),Offer_EP_datte date,Anticipated_date date,Company_Signer VARCHAR(255),Signer_Title VARCHAR(255),Signer_Email VARCHAR(255),Prepairs_Email VARCHAR(255));


CREATE TABLE letterdt(l_id SERIAL PRIMARY KEY,l_name VARCHAR(255),Company_Name VARCHAR(255),C_ress_line1 VARCHAR(255),C_Address_Line2 VARCHAR(255),c_City VARCHAR(255),C_Email_ress VARCHAR(255),P_Employees_Name VARCHAR(255),P_Employees_Email VARCHAR(255),Offer_Date date,Direct_Report VARCHAR(255),Office_Location VARCHAR(255),Paid_Method VARCHAR(255),Stock_opttion VARCHAR(255),Offer_EP_datte date,Anticipated_date date,Company_Signer VARCHAR(255),Signer_Title VARCHAR(255),Signer_Email VARCHAR(255),Prepairs_Email VARCHAR(255));
-- ALTER TABLE  letterdetails
--      Company_Name VARCHAR(255),
--      C_ress_line1 VARCHAR(255),
--      c_City VARCHAR(255),
--      ZIP_Code VARCHAR(255),
--      C_Email_ress VARCHAR(255),
--      P_Employees_Name VARCHAR(255),
--      P_Employees_Email VARCHAR(255),
--      Offer_Date date,
--      Direct_Report VARCHAR(255),
--      Office_Location VARCHAR(255),
--      Paid_Method VARCHAR(255),
--      Stock_opttion VARCHAR(255),
--      Offer_EP_datte date,
--      Anticipated_date date,
--      Company_Signer VARCHAR(255),
--      Signer_Title VARCHAR(255),
--      Signer_Email VARCHAR(255),
--      Prepairs_Email VARCHAR(255)

