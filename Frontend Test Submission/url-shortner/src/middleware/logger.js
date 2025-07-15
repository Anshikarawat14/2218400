const LOG_API = "http://20.244.56.144/evaluation-service/logs";

const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJhbnNoaWthcmF3YXQxNDAzQGdtYWlsLmNvbSIsImV4cCI6MTc1MjU2MDY5MSwiaWF0IjoxNzUyNTU5NzkxLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiMTUxNTdkMmQtYTBjNS00ZDg2LTgxN2MtZGVkOTIyNTFkZmRhIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiYW5zaGlrYSByYXdhdCIsInN1YiI6IjA3YzNmMGU2LWZkMjQtNDYyYS04MDVhLTYxYjg0OTEyMmNiYSJ9LCJlbWFpbCI6ImFuc2hpa2FyYXdhdDE0MDNAZ21haWwuY29tIiwibmFtZSI6ImFuc2hpa2EgcmF3YXQiLCJyb2xsTm8iOiIyMjE4NDAwIiwiYWNjZXNzQ29kZSI6IlFBaERVciIsImNsaWVudElEIjoiMDdjM2YwZTYtZmQyNC00NjJhLTgwNWEtNjFiODQ5MTIyY2JhIiwiY2xpZW50U2VjcmV0Ijoiem54ZGpqbW1OS21ZY1V4dCJ9.z8rr0n_2a-sSZShQemjvh0h_CGTiRRigrZDStryV1pc";

export const Log = async (stack, level, logPackage, message) => {
  const payload = {
    stack,
    level,
    package: logPackage,
    message,
  };

  try {
    const res = await fetch(LOG_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${ACCESS_TOKEN}`,
      },
      body: JSON.stringify(payload),
    });

    const result = await res.json();

    if (!res.ok) {
      console.error("Logging failed:", result);
    } else {
      console.log("Log created:", result);
    }
  } catch (err) {
    console.error("Error sending log:", err);
  }
};
