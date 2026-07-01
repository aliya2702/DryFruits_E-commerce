import React from "react";
import { STORE_DETAILS } from "../../constants/storeDetails";
import { SectionTitle, Card } from "../../components/ui";

function StoreLocationSection() {
  return (
    <section className="py-24 bg-stone-100 dark:bg-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Info Card */}
          <div className="space-y-6">
            <span className="text-amber-500 text-xs font-bold uppercase tracking-widest block">
              📍 Find Us
            </span>
            <SectionTitle
              title="Visit Our Flagship Store"
              subtitle="Want to handpick your customized dry fruits box or chocolate tray? Drop by our physical store location in Secunderabad for samples, consultation, and special store discounts."
              align="left"
              className="mb-6 max-w-none"
            />

            <Card padding="md" className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-xl">📍</span>
                <div>
                  <h4 className="font-bold text-stone-800 dark:text-stone-200 text-xs sm:text-sm">Store Address</h4>
                  <p className="text-stone-500 dark:text-stone-400 text-xs mt-1">{STORE_DETAILS.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-xl">🕒</span>
                <div>
                  <h4 className="font-bold text-stone-800 dark:text-stone-200 text-xs sm:text-sm">Working Hours</h4>
                  {STORE_DETAILS.hours.map((h, index) => (
                    <p key={index} className="text-stone-500 dark:text-stone-400 text-xs mt-1">
                      <span className="text-amber-400 font-semibold">{h.day}:</span> {h.time}
                    </p>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Interactive Map Iframe */}
          <div className="w-full h-80 sm:h-96 rounded-[2rem] overflow-hidden border border-stone-200 dark:border-stone-800 shadow-xl bg-stone-50 dark:bg-stone-950">
            <iframe
              title="Bhavani Dryfruits Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.8285552391037!2d78.4984534!3d17.4338781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a38efbdc867%3A0x6e8e89fbb3c7d6c3!2sSecunderabad%20Station%20Rd%2C%20Regimental%20Bazaar%2C%20Secunderabad%2C%20Telangana%20500003!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default StoreLocationSection;
