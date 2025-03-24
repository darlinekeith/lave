import React from 'react'

const Donations = () => {
  const donationOptions = [
    {
      type: "Monthly",
      amount: "$10",
      frequency: "/mo",
      description: "Join our monthly donors and help sustain our programs. Monthly donors receive exclusive updates, full financial transparency, and our quarterly newsletter detailing our impact.",
      cta: "Start Monthly Giving",
      highlight: false
    },
    {
      type: "One-time",
      amount: "$20",
      frequency: "",
      description: "Make an immediate impact with a single donation. Your contribution provides essentials like food, education materials, and sanitary products for the families we support.",
      cta: "Give Once",
      highlight: true
    }
  ];

  const handleContactClick = () => {
    const subject = "Inquiry About Supporting LAVE Organization";
    const body = `Hello LAVE Team,\n\nI'm interested in learning more about how I can support your organization.\n\nCould you please provide more information about:\n- Current initiatives\n- Volunteer opportunities\n- Other ways to contribute\n\nThank you,\n[Your Name]`;
    window.location.href = `mailto:darlinel38@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section name='donations' className='w-full text-white py-24 relative bg-slate-900 overflow-hidden'>
      {/* Gradient overlay */}
      <div className='absolute inset-0 bg-gradient-to-br from-blue-900/70 to-slate-900 mix-blend-overlay'></div>
      
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='text-center mb-16'>
          <h2 className='text-xl uppercase tracking-wider text-blue-300 mb-2'>Donations</h2>
          <h3 className='text-4xl md:text-5xl font-bold mb-6'>You Have a Role to Play</h3>
          <p className='text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto'>
            Together, we can create a better world. Partner with us today.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {donationOptions.map((option, index) => (
            <div 
              key={index}
              className={`bg-white text-slate-900 p-8 rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                option.highlight ? "ring-2 ring-blue-500" : ""
              }`}
            >
              <span className={`inline-block px-4 py-1 rounded-full text-sm font-medium mb-6 ${
                option.highlight ? "bg-blue-100 text-blue-800" : "bg-indigo-100 text-indigo-800"
              }`}>
                {option.type}
              </span>
              
              <div className='mb-6'>
                <p className='text-5xl font-bold flex items-baseline'>
                  {option.amount}
                  {option.frequency && (
                    <span className='text-lg text-slate-500 ml-2'>{option.frequency}</span>
                  )}
                </p>
              </div>
              
              <p className='text-lg text-slate-600 mb-8'>{option.description}</p>
              
              <button 
                className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                  option.highlight 
                    ? "bg-blue-600 hover:bg-blue-700 text-white" 
                    : "bg-indigo-600 hover:bg-indigo-700 text-white"
                }`}
              >
                {option.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Additional call to action */}
        <div className='mt-16 text-center'>
          <p className='text-slate-300 mb-6'>Want to discuss other ways to give?</p>
          <button 
            onClick={handleContactClick}
            className='px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-slate-900 transition-colors'
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  )
}

export default Donations