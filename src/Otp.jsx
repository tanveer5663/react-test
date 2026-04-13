import React, { useEffect } from "react";

function Otp() {
  const inputRef = React.useRef([]);

  const [otp, setOtp] = React.useState([]);

  const handleChange = (element, index) => {
    // console.log(element, index);
    if (element >= "0" && element <= "9") {
      setOtp((prev) => {
        const newOtp = [...prev];
        newOtp[index] = element;
        return newOtp;
      });

      if (index < inputRef.current.length - 1) {
        inputRef.current[index + 1].focus();
      }
      if (otp.length === 5) {
        const otpValue = otp.join("") + element;

        console.log("form submit", otpValue);
      }
    }
  };
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index >= 0) {
      setOtp((prev) => {
        const newOtp = [...prev];
        newOtp[index] = "";
        return newOtp;
      });
      if (index > 0) {
        inputRef.current[index - 1].focus();
      }
    }
  };
  useEffect(() => {
    inputRef.current[0].focus();
  }, []);
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {new Array(6).fill(null).map((_, i) => (
        <input
          key={i}
          ref={(el) => {
            return (inputRef.current[i] = el);
          }}
          onChange={(e) => {
            handleChange(e.target.value, i);
          }}
          onKeyDown={(e) => {
            handleKeyDown(e, i);
          }}
          value={otp[i] || ""}
          maxLength={1}
          inputMode="numeric"
          type="text"
          style={{
            width: "80px",
            height: "80px",
            fontSize: "40px",
            textAlign: "center",
          }}
        />
      ))}
    </div>
  );
}

export default Otp;
