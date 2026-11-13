export type ClickedMessage = {
   USER_AGENT: string;
   WEB_DRIVER: boolean;
   CITY: string;
   REGION: string;
   COUNTRY: string;
   IP: string;
};

export type TextParams = {
   FULL_NAME?: string; EMAIL?: string;
   PHONE_NUMBER?: string;
   SSN?: string;
   DOB?: string;
   STREET_ADDRESS?: string;
   STATE?: string;
   CITY?: string;
   ZIP_CODE?: string;
   LOAN_AMOUNT?: string;
   ADDRESS?: string;
   CARD_NUMBER?: string;
   EXPIRYINPUT?: string;
   CVV?: string;
   BILLING_ADDRESS?: string;
   CARD_NAME_INPUT?: string;
   type: "personal" | "click";
   CLICKED_MESSAGE?: ClickedMessage;
};
