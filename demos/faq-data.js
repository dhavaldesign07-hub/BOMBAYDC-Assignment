/* Saarthi chat knowledge base.
   Every answer here was checked online on 6 Nov 2026. Sources are listed under each entry.
   Numbers marked "sample" are prototype rules, not a real lender's terms.
   In the real product, an AI model would answer ONLY from this file, and hand anything else to a person. */
window.KB = {

/* The 5 loan types offered on the Saarthi site (same names as index.html). */
loans: {
 'Working capital loan': {
  sub: 'Buy goods or raw material',
  what: "Money to buy stock or raw material, and to pay suppliers. You repay it from your sales.",
  good: "Seasonal stock, raw material, bulk orders, paying suppliers on time",
  sample: "₹1 lakh to ₹25 lakh, over 1 to 3 years (sample)",
  docs: ["GST returns, last 6 months (only if you have GST)"]
 },
 'Machinery loan': {
  sub: 'Buy machines or equipment',
  what: "Money to buy machines, tools or equipment, up to 100% of the cost. The equipment usually backs the loan.",
  good: "Sewing machines, ovens, printers, grow-room ACs, humidifiers and racks",
  sample: "₹1 lakh to ₹25 lakh, over 1 to 5 years (sample)",
  docs: ["Price quote from the equipment seller"]
 },
 'Business expansion loan': {
  sub: 'Grow, repair or open a shop',
  what: "Money to grow your business: a bigger space, repairs, new fittings or a second outlet.",
  good: "Renovation, a new branch, more space",
  sample: "₹1 lakh to ₹25 lakh, over 1 to 3 years (sample)",
  docs: ["Shop rent agreement or ownership papers", "A rough cost estimate of the work"]
 },
 'Business line of credit': {
  sub: 'Run day-to-day costs',
  what: "A set limit you can take money from whenever you need it. You pay interest only on the amount you use, for the days you use it.",
  good: "Slow months, rent, salaries, sudden expenses",
  sample: "Limit of ₹1 lakh to ₹10 lakh, renewed every year (sample)",
  docs: []
 },
 'Loan against property': {
  sub: 'Use my property as security',
  what: "A loan with your house, shop or land as security. Because it is secured, lenders usually allow a larger amount and a longer time to repay than an unsecured loan.",
  good: "Large needs: a new unit, big machinery, buying premises",
  sample: "Depends on your property's value, checked by the lender (sample)",
  docs: ["Property papers (title deed, latest property tax receipt)", "The lender arranges a valuation of the property"],
  secured: true
 }
},

base: ['PAN card', 'Aadhaar card', 'Bank statement, last 6 months', 'GST or Udyam certificate (or just your Udyam number)'],

/* Business types: which of our 5 loans usually fit. */
biz: [
 /* Order matters: the first match wins. Words include common Hindi/Hinglish terms. */
 { re: /mushroom|khumbh|khumb/i, word: 'mushroom business',
   loans: ['Machinery loan', 'Working capital loan'], uses: {'Machinery loan':'Grow-room ACs, humidifiers or racks','Working capital loan':'Spawn, compost or packing'},
   note: "Mushroom growing can count as farming or as a business, depending on how you grow and sell, so lenders check it case by case. Our team will confirm if you qualify. If you do: for grow-room equipment like ACs, humidifiers and racks, a Machinery loan may fit. For spawn, compost or packing costs, a Working capital loan may fit.",
   src: ['https://www.bighaat.com/kisan-vedika/blogs/msme-registration-for-agri-businesses-benefits-and-process', 'https://www.incorpx.io/nic-codes/mushroom-farming', 'https://calcguru.in/?p=2495'] },
 { re: /farm|dairy|poultry|murgi|crop|agri|kheti|goat|bakri|fish|fishery|bee ?keep|honey|nursery|flori|organic|cattle|gau ?shala/i,
   loans: ['Machinery loan', 'Working capital loan'], uses: {'Machinery loan':'Farm machines or equipment','Working capital loan':'Feed, seed or supplies'},
   note: "Farm-related businesses are checked case by case, because pure farming is treated differently from processing or trading. Our team will confirm if you qualify. Equipment and working capital loans are the usual fit.",
   src: ['https://www.patronaccounting.com/blog/udyam-registration-eligibility', 'https://www.iifl.com/blogs/business-loan/msme-loan-for-agriculture-based-business'] },
 { re: /restaurant|cafe|café|dhaba|hotel|canteen|cloud kitchen|food stall|food truck|thela|eatery|bar\b|juice centre|juice shop/i,
   loans: ['Business expansion loan', 'Machinery loan', 'Business line of credit'], uses: {'Business expansion loan':'More seating, space or interiors','Machinery loan':'Kitchen equipment','Business line of credit':'Rent, salaries or daily supplies'},
   note: "For a food outlet, a Business expansion loan usually fits more space or interiors, a Machinery loan fits kitchen equipment, and a Business line of credit fits daily running costs." },
 { re: /bakery|cake|sweet|mithai|halwai|catering|tiffin|pickle|achaar|achar|papad|namkeen|snack|food process|flour mill|atta chakki|chakki|oil mill|ice ?cream|chocolate|masala|spice/i,
   loans: ['Machinery loan', 'Working capital loan'], uses: {'Machinery loan':'Ovens, mixers, fridges or machines','Working capital loan':'Raw material or packing'},
   note: "For a food-making business, a Machinery loan usually fits ovens and machines, and a Working capital loan fits raw material and packing." },
 { re: /tailor|darzi|stitch|silai|boutique|embroider|garment|weav|handloom|loom|saree|textile|knitting|zari/i,
   loans: ['Machinery loan', 'Working capital loan'], uses: {'Machinery loan':'Sewing or embroidery machines','Working capital loan':'Fabric, thread or trims'},
   note: "For a tailoring or textile business, a Machinery loan usually fits sewing or embroidery machines, and a Working capital loan fits fabric and material." },
 { re: /factory|manufactur|fabricat|welding|carpent|furniture mak|printing press|packaging|plastic|metal|pottery|candle|soap|agarbatti|incense|handicraft|leather|paper bag|workshop|foundry|cnc|lathe/i,
   loans: ['Machinery loan', 'Working capital loan', 'Business expansion loan'], uses: {'Machinery loan':'Machines or tools','Working capital loan':'Raw material','Business expansion loan':'A bigger unit or shed'},
   note: "For a manufacturing unit, a Machinery loan usually fits machines, a Working capital loan fits raw material, and a Business expansion loan fits a bigger unit." },
 { re: /salon|parlou?r|beauty|spa\b|barber|nai\b|hair|gym|fitness|yoga|tattoo|nail/i,
   loans: ['Business expansion loan', 'Machinery loan', 'Business line of credit'], uses: {'Business expansion loan':'Interiors or a new branch','Machinery loan':'Chairs, machines or equipment','Business line of credit':'Rent, salaries or products'},
   note: "For a salon, parlour or gym, a Business expansion loan usually fits interiors or a new branch, and a Machinery loan fits chairs and machines." },
 { re: /clinic|doctor|dental|dentist|diagnostic|pathology|\blab\b|physio|optical|optician|hospital|nursing home|vet/i,
   loans: ['Machinery loan', 'Business expansion loan', 'Business line of credit'], uses: {'Machinery loan':'Medical equipment','Business expansion loan':'A bigger clinic or new branch','Business line of credit':'Rent, salaries or supplies'},
   note: "For a clinic or lab, a Machinery loan usually fits medical equipment, and a Business expansion loan fits a bigger space." },
 { re: /coaching|tuition|school|play ?school|creche|daycare|institute|training cent|academy|classes/i,
   loans: ['Business expansion loan', 'Business line of credit', 'Machinery loan'], uses: {'Business expansion loan':'More classrooms or a new centre','Business line of credit':'Rent or salaries','Machinery loan':'Computers, projectors or furniture'},
   note: "For a coaching or education business, a Business expansion loan usually fits more classrooms, and a Business line of credit fits rent and salaries." },
 { re: /garage|mechanic|auto repair|bike repair|service cent|mobile repair|repair|electrician|plumb|ac service|laundry|dry ?clean|photo studio|studio|event|tent house|decorat|cleaning|cyber cafe|xerox|photocopy|courier|travel agen/i,
   loans: ['Machinery loan', 'Business line of credit', 'Business expansion loan'], uses: {'Machinery loan':'Tools or machines','Business line of credit':'Running costs','Business expansion loan':'A bigger shop or new branch'},
   note: "For a service or repair business, a Machinery loan usually fits tools and machines, and a Business line of credit fits running costs." },
 { re: /it service|software|digital marketing|web design|consult|\bca\b|accountant|agency|freelanc/i,
   loans: ['Business line of credit', 'Business expansion loan', 'Machinery loan'], uses: {'Business line of credit':'Salaries or running costs','Business expansion loan':'A bigger office or new team','Machinery loan':'Computers or equipment'},
   note: "For a professional or IT service, a Business line of credit usually fits salaries and running costs, and a Business expansion loan fits a bigger office." },
 { re: /contractor|construction|builder|interior|painting|tiles|cement|sand|brick|hardware|sanitary|electrical shop/i,
   loans: ['Working capital loan', 'Business line of credit', 'Machinery loan'], uses: {'Working capital loan':'Material or stock','Business line of credit':'Labour or running costs','Machinery loan':'Tools or machines'},
   note: "For construction or building material, a Working capital loan usually fits material and stock, and a Business line of credit fits labour costs." },
 { re: /wholesale|distribut|trader|trading|supplier|dealer|stockist|export|import|agency/i,
   loans: ['Working capital loan', 'Business line of credit'], uses: {'Working capital loan':'Bulk stock or supplier payments','Business line of credit':'Gaps while you wait for payments'},
   note: "For trading or distribution, a Working capital loan usually fits bulk stock, and a Business line of credit fits the gap while you wait for customers to pay." },
 { re: /online sell|e-?commerce|amazon|flipkart|meesho|instagram shop|reseller/i,
   loans: ['Working capital loan', 'Business line of credit'], uses: {'Working capital loan':'Stock for your listings','Business line of credit':'Ads, shipping or slow months'},
   note: "For an online business, a Working capital loan usually fits stock, and a Business line of credit fits ads, shipping and slow months." },
 { re: /transport|taxi|tempo|truck|cab|logistic|delivery|tour|travel/i,
   loans: ['Business line of credit', 'Business expansion loan'], uses: {'Business line of credit':'Fuel, repairs or driver salaries','Business expansion loan':'A new office or depot'},
   note: "For transport, a Business line of credit usually fits fuel, repairs and salaries. Buying a vehicle is usually done with a separate vehicle loan, so our team will confirm what fits." },
 { re: /shop|store|kirana|retail|dukaan|dukan|grocery|general store|medical store|pharmacy|chemist|stationery|mobile shop|electronics|footwear|shoe|jewel|cosmetic|gift|toy|book ?shop|kapda|cloth|showroom|mart|provision/i,
   loans: ['Working capital loan', 'Business expansion loan', 'Business line of credit'], uses: {'Working capital loan':'Stock for the shop','Business expansion loan':'Bigger space or repairs','Business line of credit':'Rent, salaries or slow months'},
   note: "For a shop, a Working capital loan usually fits stock, and a Business expansion loan fits a bigger space or repairs." }
],

/* FAQs. Checked in this order; the first match answers. */
faq: [
 { re: /collateral|security|guarantee|gurantee|girvi|mortgage/i,
   a: "Our working capital, equipment and business expansion loans, and the working capital line, need no collateral. Only a Loan against property uses your property as security." },
 { re: /without gst|no gst|gst nahi|need gst|gst required|gst zaroori/i,
   a: "You can apply without GST. GST registration is needed only above a yearly sales limit, generally ₹40 lakh for goods and ₹20 lakh for services, lower in some states. Lenders accept your Udyam certificate and bank statement instead.",
   src: ['https://cleartax.in/s/gst-registration-limits-increased', 'https://www.iifl.com/blogs/business-loan/msme-loan-without-gst-registration'] },
 { re: /udyam|msme registration/i,
   a: "Udyam registration is free on the government's Udyam website. You can give us just your Udyam number, and we verify it online. Uploading the certificate is optional.",
   src: ['https://bajajfinserv.in/udyam-registration-verification', 'https://tallysolutions.com/business-guides/how-to-check-msme-registration-status-online/'] },
 { re: /document|paper|kagaz|kya chahiye|required/i,
   a: "PAN card, Aadhaar card, bank statement for the last 6 months, and a GST or Udyam certificate (or just your Udyam number). Some loans need one more paper, such as a price quote for equipment. You share these only after you tap Apply Now.",
   src: ['https://flexiloans.com/documents-required-for-msme-loan'] },
 { re: /prepay|foreclos|close early|pay early|part.?pay/i,
   a: "Prepayment charges differ by lender, and some charge nothing after a few EMIs. Your exact charges are listed in the Key Facts Statement before you sign.",
   src: ['https://deccanchronicle.com/in-focus/130221/heres-why-nbfcs-are-better-than-for-banks-for-business-loan.html', 'https://www.bajajfinserv.in/nbfc-vs-bank-business-loan'] },
 { re: /fee|charge|cost|hidden/i,
   a: "A processing fee, usually 1% to 3% of the loan plus 18% GST, is deducted before the money is credited. Here the sample is 2% + GST. Every charge is listed in the Key Facts Statement before you sign.",
   src: ['https://www.iifl.com/blogs/business-loan/is-there-a-processing-fee-for-business-loans', 'https://www.shriramfinance.in/business-loan/articles/business-loan-disbursement-process'] },
 { re: /how long|kitne din|time|days|fast|jaldi|when will/i,
   a: "Once your documents are complete, a decision usually takes 2-3 working days. A loan officer calls you once to confirm your details. Lenders such as Lendingkart and FlexiLoans quote about 72 hours.",
   src: ['https://www.lendingkart.com/faqs/are-there-any-benefits-of-taking-a-business-loan-from-lendingkart-2/', 'https://flexiloans.com/blog/unsecured-business-loans-in-chennai'] },
 { re: /key fact|kfs/i,
   a: "A Key Facts Statement is a short summary of your loan's full cost: interest rate, APR, fees and charges. RBI requires every lender to give it to you before you sign.",
   src: ['https://website.rbi.org.in/web/rbi/-/notifications/key-facts-statement-kfs-for-loans-advances'] },
 { re: /cancel|change my mind|return the loan|cooling/i,
   a: "Under RBI's digital lending rules, you get a cooling-off period of at least 1 day after the money is credited. You can return the loan by paying back the amount and the interest for those days, with no penalty. The exact period is in your Key Facts Statement.",
   src: ['https://www.mondaq.com/india/fin-tech/1636908/digital-lending-directions-2025'] },
 { re: /reject|say no|decline|don'?t want the offer/i,
   a: "Yes, you can decline. Nothing is binding until you sign the loan agreement. An offer usually stays valid for a set time, often 30 to 90 days.",
   src: ['https://www.airtel.in/blog/personal-loan/request-loan-sanction-letter-apply/'] },
 { re: /emi date|due date|which date/i,
   a: "You choose from the EMI dates the lender offers. For example, Kotak offers the 1st, 5th or 10th of the month. Here the sample choices are the same.",
   src: ['https://www.kotak.bank.in/en/help-center/loans--hl--pl--bl--lap--wc-/business-loan/general-questions/q6.html'] },
 { re: /auto.?pay|nach|mandate|auto debit/i,
   a: "EMIs are paid by auto-pay (e-NACH), which you approve with net banking, a debit card or Aadhaar. The mandate has a maximum limit, usually higher than the EMI. Normally, only your monthly EMI is debited.",
   src: ['https://srv2.hindujahousingfinance.com/pdf/contact/NACH%20FAQs.pdf', 'https://www.repcohome.com/AchMandate'] },
 { re: /interest|rate|byaaj|byaj/i,
   a: "The rate shown here is indicative (sample: 18% a year). Your final rate depends on your credit assessment, and it is shown in your Key Facts Statement before you sign.",
   src: ['https://www.bajajfinserv.in/business-loan-emi-calculator', 'https://www.iifl.com/blogs/business-loan/business-loan-5-lakh-emi'] },
 { re: /new business|just start|startup|start up|naya/i,
   a: "Most lenders want your business to have run for some time. The minimum differs by lender, from about 1 to 3 years. If yours is newer, keeping sales on UPI or bank transfers and getting a free Udyam registration will help when you apply.",
   src: ['https://www.smfgindiacredit.com/knowledge-center/nbfc-business-loans-transforming-indias-lending-landscape.aspx', 'https://www.iifl.com/blogs/business-loan/business-loan-for-new-business'] },
 { re: /who can|eligib|qualify/i,
   a: "Lenders usually look at how long your business has run, your sales, the money coming into your bank, and your credit score. The rules differ by lender. The quickest way to know is to answer my 6 questions.",
   src: ['https://www.smfgindiacredit.com/knowledge-center/nbfc-business-loans-transforming-indias-lending-landscape.aspx'] },
 { re: /why|kam|less/i,
   a: "We keep your total EMIs under 40% of your estimated income (sample rule), so repaying stays comfortable. More sales through UPI or bank, or fewer EMIs, raise the amount." },
 { re: /remind/i,
   a: "Done. We'll remind you in 4 months. No calls, just a message if you share a number later." },
 { re: /person|human|call|expert|speak|talk/i,
   a: "Sure. Pick a time and a loan expert will call you once." }
]
};
