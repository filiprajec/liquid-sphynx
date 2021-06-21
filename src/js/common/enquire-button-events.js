let enquireFormVisible = false;

const getEnquireButtonRef = () => {
  const enquireButtonId = "enquire-button";
  return document.getElementById(enquireButtonId);
};

const getEnquiryFormRef = () => {
  const enquireFormId = "header-enquiry-form-portal";
  return document.getElementById(enquireFormId);
};

const showEnquireForm = (ref) => {
  ref.classList.add("d-block");
  ref.classList.remove("d-none");
};

const hideEnquireForm = (ref) => {
  ref.classList.add("d-none");
  ref.classList.remove("d-block");
};

const updateEnquireButtonInnerHTML = (innerHTML) => {
  const enquireButtonRef = getEnquireButtonRef();
  if (enquireButtonRef != null) {
    enquireButtonRef.innerHTML = innerHTML;
  }
};

const toggleEnquireForm = () => {
  enquireFormVisible = !enquireFormVisible;
  const enquireRef = getEnquiryFormRef();
  if (enquireRef != null) {
    if (enquireFormVisible) {
      showEnquireForm(enquireRef);
      updateEnquireButtonInnerHTML("Close");
      return;
    }
    hideEnquireForm(enquireRef);
    updateEnquireButtonInnerHTML("Enquire");
  }
};

const attachEnquireEventListener = () => {
  const enquireButtonRef = getEnquireButtonRef();
  if (enquireButtonRef != null) {
    enquireButtonRef.addEventListener("click", toggleEnquireForm);
  }
};

export default attachEnquireEventListener;
