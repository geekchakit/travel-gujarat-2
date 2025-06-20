import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-orange-50 min-h-screen">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-orange-500 py-6 px-8">
            <h1 className="text-3xl font-bold text-white text-center">
              PRIVACY POLICY
            </h1>
          </div>

          <div className="p-8 space-y-6 text-gray-800">
            <p>
              Certain user personal information, like name, address, and so on,
              may be utilized for statistics and/or other purposes while you are
              on this site. Furthermore, additional data, such as IP addresses,
              site navigation routes, the systems and programs used to access
              the site, the amount of time spent on the site, and other
              comparable data, may be saved on our servers and perhaps utilized
              for analysis in the future.
            </p>

            <p>
              In addition to encouraging site visitors to read and familiarize
              themselves with our Privacy Policy, we also want to reassure users
              that we do not sell or rent their personal information to outside
              parties.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-orange-600 border-b border-orange-200 pb-2">
              Information Sharing
            </h2>
            <p>
              Only our travel providers that are directly or indirectly
              connected to the users' reservations will get any personally
              identifiable information that users submit when using Gujarat
              HOLIDAYS. We promise not to provide any other third party access
              to user information in any way, including selling, sharing, or
              disclosing it.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-orange-600 border-b border-orange-200 pb-2">
              Data Security
            </h2>
            <p>
              We would like to reassure users who use Gujarat tour package to
              book and arrange their journey that we will always be dedicated to
              safeguarding the data we gather via the website. Although no
              website can guarantee security, we would like to point out that we
              have put in place the proper administrative, technological, and
              physical security measures to assist safeguard the private data
              that our users provide us.
            </p>

            <p>
              We shall utilize industry-standard Internet security techniques
              and technology to guard against unwanted access, preserve data
              integrity, and guarantee proper information usage.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-orange-600 border-b border-orange-200 pb-2">
              Policy Updates
            </h2>
            <p>
              To make sure they get the most recent version, we will suggest
              that users bookmark this page and/or check it from time to time.
              We regularly examine our privacy policy, and as part of such
              assessment, we may make periodic modifications to the policy.
            </p>

            <p>
              We guarantee our complete adherence to the privacy policies
              outlined in this Privacy Policy at the moment users submitted
              their personal information on the website, regardless of any
              subsequent revisions.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-orange-600 border-b border-orange-200 pb-2">
              Contact Us
            </h2>
            <p>
              If you have any more queries or worries about our privacy policy,
              please send us an email at
              <a
                href="mailto:info@gujrattourpackage.com"
                className="text-orange-500 hover:text-orange-700 font-medium ml-1"
              >
                info@gujrattourpackage.com
              </a>
              , and we'll get back to you right away.
            </p>

            <div className="mt-12 pt-4 border-t border-orange-200 flex items-center justify-between">
              <p className="text-sm text-gray-500">
                Last updated: April 12, 2025
              </p>
              <div className="flex items-center">
                {/* <div className="h-8 w-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs"></span>
                </div> */}
                <span className="ml-2 text-orange-600 font-medium">
                  Gujarat tour package
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
