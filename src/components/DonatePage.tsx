import React from 'react';
import { motion } from 'framer-motion';
import { IndianRupee, DollarSign, Heart, ExternalLink } from 'lucide-react';

const DonatePage = () => {
  return (
    <section id="donate" className="py-20 bg-gradient-to-b from-navy-50 to-white dark:from-navy-900 dark:to-navy-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="w-8 h-8 text-maroon-600" />
            <h1 className="text-4xl font-bold text-navy-900 dark:text-white">Support Our Ministry</h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Partner with us in building God's kingdom through your generous giving
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* India Donations Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-navy-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-3 mb-6">
              <IndianRupee className="w-8 h-8 text-maroon-600" />
              <h2 className="text-2xl font-bold text-navy-900 dark:text-white">INDIA DONATIONS</h2>
            </div>

            <div className="space-y-8">
              {/* PhonePe QR Code */}
              <div className="bg-gray-50 dark:bg-navy-600 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-navy-900 dark:text-white mb-6 text-center">UPI / PhonePe</h3>
                <div className="flex justify-center">
                  <img 
                    src="https://lctech.in/faithtemple-images/donation.jpg" 
                    alt="India Donation QR Code"
                    className="w-full max-w-[400px] h-auto object-contain rounded-lg shadow-md"
                  />
                </div>
                <p className="text-center mt-6 text-gray-600 dark:text-gray-300">
                  Scan with any UPI app to donate
                </p>
              </div>

              {/* Bank Account Details */}
              <div className="bg-gray-50 dark:bg-navy-600 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-navy-900 dark:text-white mb-6 text-center">Bank Account Details</h3>
                <div className="space-y-4">
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Bank Name</span>
                    <span className="text-navy-900 dark:text-white font-medium">ICICI</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Account Number</span>
                    <span className="text-navy-900 dark:text-white font-medium">363001000746</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Account Name</span>
                    <span className="text-navy-900 dark:text-white font-medium">Anne Sridhar</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500 dark:text-gray-400">IFSC Code</span>
                    <span className="text-navy-900 dark:text-white font-medium">ICIC0006306</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* International Donations Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-navy-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-3 mb-6">
              <DollarSign className="w-8 h-8 text-maroon-600" />
              <h2 className="text-2xl font-bold text-navy-900 dark:text-white">INTERNATIONAL DONATIONS</h2>
            </div>

            <div className="space-y-8">
              {/* Zelle */}
              <div className="bg-gray-50 dark:bg-navy-600 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-navy-900 dark:text-white mb-6 text-center">Zelle</h3>
                <div className="flex justify-center">
                  <img 
                    src="https://lctech.in/faithtemple-images/zelle-qrcode.jpg" 
                    alt="Zelle QR Code"
                    className="w-full max-w-[300px] h-auto object-contain rounded-lg shadow-md"
                  />
                </div>
              </div>

              {/* Mosaic */}
              <div className="bg-gray-50 dark:bg-navy-600 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-navy-900 dark:text-white mb-6 text-center">Mosaic</h3>
                <div className="flex justify-center">
                  <img 
                    src="https://lctech.in/faithtemple-images/mosaic-qrcode.jpg" 
                    alt="Mosaic QR Code"
                    className="w-full max-w-[300px] h-auto object-contain rounded-lg shadow-md"
                  />
                </div>
                <div className="mt-6 text-center">
                  <a 
                    href="https://subsplash.com/u/mosaicva/give?frequency=once&next_process_date=02/01/2025&campus_id=eddf488c-a11c-44be-a156-a250eb63b200&fund_id=ed4c85c1-d4e0-4971-983c-33ed7831bd33"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-maroon-600 hover:text-maroon-700 dark:text-maroon-400 dark:hover:text-maroon-300"
                  >
                    Donate with Mosaic
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>

              {/* PayPal */}
              <div className="bg-gray-50 dark:bg-navy-600 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-navy-900 dark:text-white mb-6 text-center">PayPal</h3>
                <div className="flex justify-center">
                  <img 
                    src="https://lctech.in/faithtemple-images/paypal.jpg" 
                    alt="PayPal QR Code"
                    className="w-full max-w-[300px] h-auto object-contain rounded-lg shadow-md"
                  />
                </div>
                <div className="mt-6 text-center">
                  <a 
                    href="https://paypal.me/SridharAnne?country.x=US&locale.x=en_US"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-maroon-600 hover:text-maroon-700 dark:text-maroon-400 dark:hover:text-maroon-300"
                  >
                    Donate with PayPal
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Your generous donations support our mission of spreading God's word and serving our community.
          </p>
          <p className="max-w-2xl mx-auto mt-4 text-sm text-gray-500 dark:text-gray-400">
            For any questions about donations, please contact us at{' '}
            <a href="mailto:faithtempleindia@gmail.com" className="text-maroon-600 hover:text-maroon-500">
              faithtempleindia@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DonatePage;