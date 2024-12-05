import MainLayout from "@/components/layout/MainLayout";
import React from "react";

const FaqPage = () => {
  return (
    <MainLayout>
      <div className="faq-section scroll-margin pt-120 mb-120" id="faq-section">
        <div className="container">
          <div className="row g-4 mb-120">
            <div className="col-lg-4 d-flex justify-content-lg-center align-items-lg-center">
              <div className="verticle-text">
                <h2>General</h2>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="faq-content style-2">
                <div className="accordion" id="accordionGeneral">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheadingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapseOne"
                        aria-expanded="true"
                        aria-controls="faqcollapseOne"
                      >
                        01. What is Task Management and how does it work?
                      </button>
                    </h2>
                    <div
                      id="faqcollapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="faqheadingOne"
                      data-bs-parent="#accordionGeneral"
                    >
                      <div className="accordion-body">
                        Aptent taciti sociosqu ad litora torquent per conubia
                        nostra, per inci only Integer purus onthis felis non
                        aliquam.Mauris nec just vitae ann auctor tol euismod sit
                        amet non ipsul growing this
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheadingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapseTwo"
                        aria-expanded="false"
                        aria-controls="faqcollapseTwo"
                      >
                        02. Is Zenfy suitable for my business?
                      </button>
                    </h2>
                    <div
                      id="faqcollapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqheadingTwo"
                      data-bs-parent="#accordionGeneral"
                    >
                      <div className="accordion-body">
                        Aptent taciti sociosqu ad litora torquent per conubia
                        nostra, per inceptos only Integer purus onthis placerat
                        felis non aliquam.Mauris nec justo vitae ante auctor tol
                        euismod sit amet non ipsul growing this Praesent commodo
                        at massa eget suscipit. Utani vitae enim velit.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheadingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapseThree"
                        aria-expanded="false"
                        aria-controls="faqcollapseThree"
                      >
                        03. the system requirements using Task Management?
                      </button>
                    </h2>
                    <div
                      id="faqcollapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqheadingThree"
                      data-bs-parent="#accordionGeneral"
                    >
                      <div className="accordion-body">
                        Aptent taciti sociosqu ad litora torquent per conubia
                        nostra, per inceptos only Integer purus onthis placerat
                        felis non aliquam.Mauris nec justo vitae ante auctor tol
                        euismod sit amet non ipsul growing this Praesent commodo
                        at massa eget suscipit. Utani vitae enim velit.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheadingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapseFour"
                        aria-expanded="false"
                        aria-controls="faqcollapseFour"
                      >
                        04. How can I upgrade my subscription?
                      </button>
                    </h2>
                    <div
                      id="faqcollapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqheadingFour"
                      data-bs-parent="#accordionGeneral"
                    >
                      <div className="accordion-body">
                        Aptent taciti sociosqu ad litora torquent per conubia
                        nostra, per inceptos only Integer purus onthis placerat
                        felis non aliquam.Mauris nec justo vitae ante auctor tol
                        euismod sit amet non ipsul growing this Praesent commodo
                        at massa eget suscipit. Utani vitae enim velit.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheadingFive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapseFive"
                        aria-expanded="false"
                        aria-controls="faqcollapseFive"
                      >
                        05. What measures are in protect user privacy?
                      </button>
                    </h2>
                    <div
                      id="faqcollapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqheadingFive"
                      data-bs-parent="#accordionGeneral"
                    >
                      <div className="accordion-body">
                        Aptent taciti sociosqu ad litora torquent per conubia
                        nostra, per inceptos only Integer purus onthis placerat
                        felis non aliquam.Mauris nec justo vitae ante auctor tol
                        euismod sit amet non ipsul growing this Praesent commodo
                        at massa eget suscipit. Utani vitae enim velit.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheadingSix">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapseSix"
                        aria-expanded="false"
                        aria-controls="faqcollapseSix"
                      >
                        06. I'm Find technical issues. What should I do?
                      </button>
                    </h2>
                    <div
                      id="faqcollapseSix"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqheadingSix"
                      data-bs-parent="#accordionGeneral"
                    >
                      <div className="accordion-body">
                        Aptent taciti sociosqu ad litora torquent per conubia
                        nostra, per inceptos only Integer purus onthis placerat
                        felis non aliquam.Mauris nec justo vitae ante auctor tol
                        euismod sit amet non ipsul growing this Praesent commodo
                        at massa eget suscipit. Utani vitae enim velit.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheadingSeven">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapseSeven"
                        aria-expanded="false"
                        aria-controls="faqcollapseSeven"
                      >
                        07. How can I reach customer support?
                      </button>
                    </h2>
                    <div
                      id="faqcollapseSeven"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqheadingSeven"
                      data-bs-parent="#accordionGeneral"
                    >
                      <div className="accordion-body">
                        Aptent taciti sociosqu ad litora torquent per conubia
                        nostra, per inceptos only Integer purus onthis placerat
                        felis non aliquam.Mauris nec justo vitae ante auctor tol
                        euismod sit amet non ipsul growing this Praesent commodo
                        at massa eget suscipit. Utani vitae enim velit.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheadingEight">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapseEight"
                        aria-expanded="false"
                        aria-controls="faqcollapseEight"
                      >
                        08. a community forum for Task Management users?
                      </button>
                    </h2>
                    <div
                      id="faqcollapseEight"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqheadingEight"
                      data-bs-parent="#accordionGeneral"
                    >
                      <div className="accordion-body">
                        Aptent taciti sociosqu ad litora torquent per conubia
                        nostra, per inceptos only Integer purus onthis placerat
                        felis non aliquam.Mauris nec justo vitae ante auctor tol
                        euismod sit amet non ipsul growing this Praesent commodo
                        at massa eget suscipit. Utani vitae enim velit.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 d-flex justify-content-lg-center align-items-lg-center">
              <div className="verticle-text">
                <h2>Payment</h2>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="faq-content style-2">
                <div className="accordion" id="accordionPayment">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheading2One">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapse2One"
                        aria-expanded="true"
                        aria-controls="faqcollapse2One"
                      >
                        01. What is Task Management and how does it work?
                      </button>
                    </h2>
                    <div
                      id="faqcollapse2One"
                      className="accordion-collapse collapse show"
                      aria-labelledby="faqheading2One"
                      data-bs-parent="#accordionPayment"
                    >
                      <div className="accordion-body">
                        Aptent taciti sociosqu ad litora torquent per conubia
                        nostra, per inci only Integer purus onthis felis non
                        aliquam.Mauris nec just vitae ann auctor tol euismod sit
                        amet non ipsul growing this
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheading2Two">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapse2Two"
                        aria-expanded="false"
                        aria-controls="faqcollapse2Two"
                      >
                        02. Is Zenfy suitable for my business?
                      </button>
                    </h2>
                    <div
                      id="faqcollapse2Two"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqheading2Two"
                      data-bs-parent="#accordionPayment"
                    >
                      <div className="accordion-body">
                        Aptent taciti sociosqu ad litora torquent per conubia
                        nostra, per inceptos only Integer purus onthis placerat
                        felis non aliquam.Mauris nec justo vitae ante auctor tol
                        euismod sit amet non ipsul growing this Praesent commodo
                        at massa eget suscipit. Utani vitae enim velit.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheading2Three">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapse2Three"
                        aria-expanded="false"
                        aria-controls="faqcollapse2Three"
                      >
                        03. the system requirements using Task Management?
                      </button>
                    </h2>
                    <div
                      id="faqcollapse2Three"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqheading2Three"
                      data-bs-parent="#accordionPayment"
                    >
                      <div className="accordion-body">
                        Aptent taciti sociosqu ad litora torquent per conubia
                        nostra, per inceptos only Integer purus onthis placerat
                        felis non aliquam.Mauris nec justo vitae ante auctor tol
                        euismod sit amet non ipsul growing this Praesent commodo
                        at massa eget suscipit. Utani vitae enim velit.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheading2Four">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapse2Four"
                        aria-expanded="false"
                        aria-controls="faqcollapse2Four"
                      >
                        04. How can I upgrade my subscription?
                      </button>
                    </h2>
                    <div
                      id="faqcollapse2Four"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqheading2Four"
                      data-bs-parent="#accordionPayment"
                    >
                      <div className="accordion-body">
                        Aptent taciti sociosqu ad litora torquent per conubia
                        nostra, per inceptos only Integer purus onthis placerat
                        felis non aliquam.Mauris nec justo vitae ante auctor tol
                        euismod sit amet non ipsul growing this Praesent commodo
                        at massa eget suscipit. Utani vitae enim velit.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheading2Five">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapse2Five"
                        aria-expanded="false"
                        aria-controls="faqcollapse2Five"
                      >
                        05. What measures are in protect user privacy?
                      </button>
                    </h2>
                    <div
                      id="faqcollapse2Five"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqheading2Five"
                      data-bs-parent="#accordionPayment"
                    >
                      <div className="accordion-body">
                        Aptent taciti sociosqu ad litora torquent per conubia
                        nostra, per inceptos only Integer purus onthis placerat
                        felis non aliquam.Mauris nec justo vitae ante auctor tol
                        euismod sit amet non ipsul growing this Praesent commodo
                        at massa eget suscipit. Utani vitae enim velit.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheading2Six">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapse2Six"
                        aria-expanded="false"
                        aria-controls="faqcollapse2Six"
                      >
                        06. I'm Find technical issues. What should I do?
                      </button>
                    </h2>
                    <div
                      id="faqcollapse2Six"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqheading2Six"
                      data-bs-parent="#accordionPayment"
                    >
                      <div className="accordion-body">
                        Aptent taciti sociosqu ad litora torquent per conubia
                        nostra, per inceptos only Integer purus onthis placerat
                        felis non aliquam.Mauris nec justo vitae ante auctor tol
                        euismod sit amet non ipsul growing this Praesent commodo
                        at massa eget suscipit. Utani vitae enim velit.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheading2Seven">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapse2Seven"
                        aria-expanded="false"
                        aria-controls="faqcollapse2Seven"
                      >
                        07. How can I reach customer support?
                      </button>
                    </h2>
                    <div
                      id="faqcollapse2Seven"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqheading2Seven"
                      data-bs-parent="#accordionPayment"
                    >
                      <div className="accordion-body">
                        Aptent taciti sociosqu ad litora torquent per conubia
                        nostra, per inceptos only Integer purus onthis placerat
                        felis non aliquam.Mauris nec justo vitae ante auctor tol
                        euismod sit amet non ipsul growing this Praesent commodo
                        at massa eget suscipit. Utani vitae enim velit.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="faqheading2Eight">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqcollapse2Eight"
                        aria-expanded="false"
                        aria-controls="faqcollapse2Eight"
                      >
                        08. a community forum for Task Management users?
                      </button>
                    </h2>
                    <div
                      id="faqcollapse2Eight"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqheading2Eight"
                      data-bs-parent="#accordionPayment"
                    >
                      <div className="accordion-body">
                        Aptent taciti sociosqu ad litora torquent per conubia
                        nostra, per inceptos only Integer purus onthis placerat
                        felis non aliquam.Mauris nec justo vitae ante auctor tol
                        euismod sit amet non ipsul growing this Praesent commodo
                        at massa eget suscipit. Utani vitae enim velit.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default FaqPage;
