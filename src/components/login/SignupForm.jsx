import { useState } from "react";

export function SignupForm({ onSuccess }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    terms: false,
  });
  const [errors, setErrors] = useState({});
  const [showPass, setShowPass] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = "First name is required";
    if (!form.lastName.trim()) e.lastName = "Last name is required";
    if (!form.email.includes("@")) e.email = "Enter a valid email address";
    if (form.password.length < 8)
      e.password = "Password must be at least 8 characters";
    if (!form.terms) e.terms = "You must accept the terms to continue";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    onSuccess();
  };

  const update = (key, val) => {
    setForm((p) => ({ ...p, [key]: val }));
    setErrors((p) => ({ ...p, [key]: "" }));
  };

  // Light card styling — dark text on white background
  const inputCls = (key) =>
    `w-full px-3.5 py-3 rounded-lg text-sm font-sans outline-none bg-white text-slate-800 placeholder:text-slate-400
     border ${errors[key] ? "border-red-400" : "border-slate-200"} focus:border-[#0CC8A8] transition-colors`;

  const Error = ({ field }) =>
    errors[field] ? (
      <p className="text-red-400 text-xs mt-1">{errors[field]}</p>
    ) : null;

  return (
    <div>
      {/* Name row */}
      <div className=" mb-3">
        <div>
          <input
            type="text"
            placeholder="First name*"
            value={form.firstName}
            onChange={(e) => update("firstName", e.target.value)}
            className={inputCls("firstName")}
            aria-label="First name"
          />
          <Error field="firstName" />
        </div>
      </div>
      {/* last name */}
      <div className="mb-3">
        <input
          type="text"
          placeholder="Last name*"
          value={form.lastName}
          onChange={(e) => update("lastName", e.target.value)}
          className={inputCls("lastName")}
          aria-label="Last name"
        />
        <Error field="lastName" />
      </div>

      {/* Email */}
      <div className="mb-3">
        <input
          type="email"
          placeholder="Email address*"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          className={inputCls("email")}
          aria-label="Email address"
        />
        <Error field="email" />
      </div>

      {/* Password */}
      <div className="mb-4">
        <div className="relative">
          <input
            type={showPass ? "text" : "password"}
            placeholder="Password (8+ characters)*"
            value={form.password}
            onChange={(e) => update("password", e.target.value)}
            className={inputCls("password")}
            aria-label="Password"
          />
          <button
            onClick={() => setShowPass((p) => !p)}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer text-slate-400 flex items-center justify-center p-0"
            aria-label={showPass ? "Hide password" : "Show password"}
          >
            {showPass ? (
              /* Open eye — password is visible */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            ) : (
              /* Closed eye — password is hidden */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 130 85"
                className="w-6 h-auto"
                fill="none"
                stroke="currentColor"
                strokeWidth="7"
                strokeLinecap="round"
              >
                <path d="M14 36 Q65 74 116 36" />
                <line x1="30" y1="52" x2="18" y2="74" />
                <line x1="54" y1="55" x2="52" y2="83" />
                <line x1="76" y1="55" x2="78" y2="83" />
                <line x1="100" y1="52" x2="112" y2="74" />
              </svg>
            )}
          </button>
        </div>
        <Error field="password" />
      </div>

      {/* Terms */}
      <div className="flex items-start gap-2 mb-5">
        <input
          type="checkbox"
          id="terms"
          checked={form.terms}
          onChange={(e) => update("terms", e.target.checked)}
          className="mt-0.5 accent-[#0CC8A8] w-3.5 h-3.5 flex-shrink-0"
        />
        <label
          htmlFor="terms"
          className="text-xs text-slate-500 leading-relaxed"
        >
          I agree to Aps's{" "}
          <span className="text-[blue] cursor-pointer underline">
            Terms & Conditions
          </span>{" "}
          and acknowledge the{" "}
          <span className="text-[blue] cursor-pointer underline">
            Privacy Policy
          </span>
        </label>
      </div>
      <Error field="terms" />

      {/* CTA */}
      <button
        onClick={handleSubmit}
        className="w-full py-3.5 rounded-full bg-[#0CC8A8] border-none text-white font-semibold text-base cursor-pointer mb-4 font-sans hover:bg-[#0aa08a] transition-colors"
      >
        Create account
      </button>

      {/* Social login */}
      <div className="grid grid-cols-3 gap-2">
        <button className="flex items-center justify-center py-2.5 rounded-full bg-black text-white border-none cursor-pointer text-base font-bold hover:opacity-80 transition-opacity">
          <svg
            fill="#ffffff"
            height="20px"
            width="20px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 22.773 22.773"
            xml:space="preserve"
            stroke="#ffffff"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573 c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z"></path>{" "}
                  <path d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334 c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0 c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019 c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464 c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648 c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z"></path>{" "}
                </g>{" "}
                <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                <g> </g>{" "}
              </g>{" "}
            </g>
          </svg>
        </button>
        {/* google */}
        <button className="flex items-center justify-center py-2.5 rounded-full bg-slate-100 text-gray-700 border border-slate-200 cursor-pointer text-base font-bold hover:bg-slate-200 transition-colors">
          <svg
            viewBox="-0.5 0 48 48"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            fill="#000000"
            height="25px"
            width="25px"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <title>Google-color</title> <desc>Created with Sketch.</desc>{" "}
              <defs> </defs>{" "}
              <g
                id="Icons"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                {" "}
                <g id="Color-" transform="translate(-401.000000, -860.000000)">
                  {" "}
                  <g id="Google" transform="translate(401.000000, 860.000000)">
                    {" "}
                    <path
                      d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                      id="Fill-1"
                      fill="#FBBC05"
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                      id="Fill-2"
                      fill="#EB4335"
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                      id="Fill-3"
                      fill="#34A853"
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                      id="Fill-4"
                      fill="#4285F4"
                    >
                      {" "}
                    </path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
        </button>
        <button className="flex items-center justify-center py-2.5 rounded-full bg-[#1877f2] text-white border-none cursor-pointer text-base font-bold hover:opacity-80 transition-opacity">
          <svg
            viewBox="0 0 24 24"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            fill="#ffffff"
            stroke="#ffffff"
            height="30px"
            width="30px"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <title>meta_fill</title>{" "}
              <g
                id="页面-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                {" "}
                <g id="Brand" transform="translate(-480.000000, -48.000000)">
                  {" "}
                  <g
                    id="meta_fill"
                    transform="translate(480.000000, 48.000000)"
                  >
                    {" "}
                    <path
                      d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                      id="MingCute"
                      fill-rule="nonzero"
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M16.0235,4.50341 C17.8529,4.3766 19.267,5.44519 20.2076,6.67737 C21.156,7.91976 21.8094,9.54336 22.1673,11.1394 C22.5251,12.7347 22.6208,14.4504 22.3239,15.9123 C22.0388,17.3161 21.2785,18.9223 19.5568,19.437 C17.9375,19.9211 16.5179,19.2167 15.5052,18.3648 C14.4894,17.5103 13.6292,16.3122 12.953,15.1885 C12.6252,14.6438 12.3272,14.0938 12.0637,13.573 C11.8001,14.0938 11.5021,14.6438 11.1743,15.1885 C10.4981,16.3122 9.63792,17.5103 8.62209,18.3648 C7.60941,19.2167 6.18982,19.9211 4.57048,19.437 C2.84884,18.9223 2.08848,17.3161 1.80341,15.9123 C1.50655,14.4504 1.60217,12.7347 1.95995,11.1394 C2.31789,9.54336 2.97134,7.91976 3.91972,6.67737 C4.86029,5.44519 6.27437,4.3766 8.10383,4.50341 C9.81996636,4.62237364 11.0674829,5.78648603 11.8446591,6.77187041 L12.0637,7.0609 L12.0637,7.0609 L12.2827156,6.77187041 C13.059814,5.78648603 14.3073182,4.62237364 16.0235,4.50341 Z M7.89637,7.49623 C7.47584,7.46708 6.92691,7.6821 6.30436,8.49766 C5.68961,9.30301 5.17981,10.4913 4.88724,11.7959 C4.59453,13.1011 4.5524,14.3747 4.74341,15.3153 C4.90819312,16.126825 5.17222414,16.4173547 5.33536471,16.5186918 L5.40276778,16.5532373 L5.40276778,16.5532373 L5.42973,16.5627 C5.6624,16.6322 6.04382,16.6134 6.69089,16.0691 C7.33482,15.5274 7.99318,14.6564 8.60392,13.6416 C8.87629333,13.1890333 9.12860444,12.7252222 9.35564593,12.2790926 L9.61563301,11.7540754 L9.61563301,11.7540754 L9.8493616,11.25714 L9.8493616,11.25714 L10.0548321,10.7993939 L10.0548321,10.7993939 L10.2300447,10.3919447 L10.2300447,10.3919447 L10.373,10.0459 L10.373,10.0459 C10.2165,9.73315 9.99218,9.32834 9.71032,8.92724 C9.06612,8.01052 8.42073,7.53258 7.89637,7.49623 Z M16.2309,7.49623 C15.7066,7.53258 15.0612,8.01052 14.417,8.92724 C14.1351,9.32834 13.9108,9.73315 13.7543,10.0459 L13.9809584,10.588688 L13.9809584,10.588688 L14.1715556,11.0226741 C14.2058156,11.0990422 14.2412947,11.1772747 14.2779512,11.25714 L14.511686,11.7540754 L14.511686,11.7540754 L14.7716778,12.2790926 C14.9987222,12.7252222 15.2510333,13.1890333 15.5234,13.6416 C16.1341,14.6564 16.7925,15.5274 17.4364,16.0691 C18.0372786,16.5745214 18.4090587,16.6268332 18.6454171,16.576082 L18.6976,16.5627 C18.8279,16.5237 19.1811,16.3141 19.3839,15.3153 C19.5749,14.3747 19.5328,13.1011 19.2401,11.7959 C18.9475,10.4913 18.4377,9.30301 17.8229,8.49766 C17.2004,7.6821 16.6515,7.46708 16.2309,7.49623 Z"
                      id="形状"
                      fill="#ffffff"
                    >
                      {" "}
                    </path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
}
