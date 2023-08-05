// import React from 'react'
// import CodeExposurePhoto from '../static/uploadPhoto.JPG'


// function ColdExposure(){

//     return (
//         // <div className='Cold-exposure'>
//         //     <h3> What is cold exposure? </h3>

//         //     <p> 
//         //         Cold exposure or cold immersion is a physical therapy treatment where the body is intentionally immersed in cold water traditionally ranging between 3-10 degrees celsius. This Alternative form of treatment has been around for centuries made popular by the Scandinavian and nordic traditions which consisted of people submerging in cold/Ice water to eliminate skin conditions, reduce inflammation, physical injuries, illness and overall combat a variety of health related issues. 
//         //     </p>

//         //     <h3> What are the benefits? </h3>

//         //     <p> 
//         //     There are many benefits of cold immersion and it is important to remember that no one person is the same. Each individual may experience a variety of the benefits listed, these benefits are based on each persons individual health. 

//         //         increased energy
//         //         Increased immune system strength 
//         //         Weightloss (Brown fat production)
//         //         Reduced inflammation
//         //         Hormone regulation 
//         //         Improves sleep
//         //         Muscle/training recovery 
//         //         Eases symptoms of depression and anxiety 
//         //         Improves the body’s breathing response through times of high stress 
//         //         Trauma and PTSD

//         //     </p>


//         //     <div>
//         //         <img src={CodeExposurePhoto} alt="CodeExposure_Photo" class='exposure-photo' />
//         //     </div>


//         //     <h3> What can I expect from guided cold immersion? </h3>
//         //     <p>
//         //         Before getting into the Ice bath I will be asking you a few questions related to your overall health and emotional well being, I will then guide you through some breathing techniques that you will utilize before and during your Cold immersion experience. You will step into the water and immediately submerge your body up to your neck. Upon submersion your body will start to produce hormones related to the “fight or flight”(sympathetic NS) response. Using the breathing techniques that you were taught is imperative to helping your nervous system shift, This shift will usually take 30-90 seconds. 
//         //     </p>            
//         //     <p>
//         //         After this shift occurs you will likely experience a sense of deep mental focus as if you are tuning out everything else around you. At this time you may start to feel a sense of calm come over you as blood flow is shunted to your core causing a tingling sensation in your extremities. All of these sensations are a normal part of your experience. The practice of cold immersion should never cause pain but will likely be uncomfortable at times and through this practice you will discover that it is only through discomfort that we can truly grow. The total amount of time spent in cold immersion varies on the individual but 2-3 minutes is all one needs to reap the benefits of this practice. 
//         //     </p>




//         // </div>
        

//         <div class='Cold-exposure'>
//             <h3 class='section-title'>What is cold exposure?</h3>

//             <p class='section-content'>
//                 Cold exposure or cold immersion is a physical therapy treatment where the body is intentionally immersed in cold water traditionally ranging between 3-10 degrees Celsius. This alternative form of treatment has been around for centuries, made popular by the Scandinavian and Nordic traditions, which consisted of people submerging in cold/ice water to eliminate skin conditions, reduce inflammation, physical injuries, illness, and overall combat a variety of health-related issues.
//             </p>

//             <h3 class='section-title'>What are the benefits?</h3>

//             <ul class='benefits-list section-content'>
//                 <li>Increased energy</li>
//                 <li>Increased immune system strength</li>
//                 <li>Weight loss (Brown fat production)</li>
//                 <li>Reduced inflammation</li>
//                 <li>Hormone regulation</li>
//                 <li>Improves sleep</li>
//                 <li>Muscle/training recovery</li>
//                 <li>Eases symptoms of depression and anxiety</li>
//                 <li>Improves the body’s breathing response through times of high stress, trauma, and PTSD</li>
//             </ul>

//             <img src={CodeExposurePhoto} alt="CodeExposure_Photo" class='exposure-photo' />

//             <h3 class='section-title'>What can I expect from guided cold immersion?</h3>
//             <p class='section-content'>
//                 Before getting into the ice bath, I will be asking you a few questions related to your overall health and emotional well-being. I will then guide you through some breathing techniques that you will utilize before and during your cold immersion experience. You will step into the water and immediately submerge your body up to your neck. Upon submersion, your body will start to produce hormones related to the “fight or flight” (sympathetic NS) response. Using the breathing techniques that you were taught is imperative to helping your nervous system shift. This shift will usually take 30-90 seconds.
//             </p>
//             <p class='section-content'>
//                 After this shift occurs, you will likely experience a sense of deep mental focus as if you are tuning out everything else around you. At this time, you may start to feel a sense of calm come over you as blood flow is shunted to your core, causing a tingling sensation in your extremities. All of these sensations are a normal part of your experience. The practice of cold immersion should never cause pain but will likely be uncomfortable at times. Through this practice, you will discover that it is only through discomfort that we can truly grow. The total amount of time spent in cold immersion varies on the individual, but 2-3 minutes is all one needs to reap the benefits of this practice.
//             </p>
//         </div>


//     )

// }

// export default ColdExposure;








import React, { useState } from 'react';
import CodeExposurePhoto from '../static/uploadPhoto.JPG';

function ColdExposure() {
  const [selectedBenefits, setSelectedBenefits] = useState([]);

  const toggleBadgeColor = (benefit) => {
    setSelectedBenefits((prevSelectedBenefits) =>
      prevSelectedBenefits.includes(benefit)
        ? prevSelectedBenefits.filter((item) => item !== benefit)
        : [...prevSelectedBenefits, benefit]
    );
  };

  return (
    <div className='Cold-exposure'>
      <h3 className='section-title'>What is cold exposure?</h3>
      <p className='section-content'>
        Cold exposure or cold immersion is a physical therapy treatment where the body is intentionally immersed in cold water traditionally ranging between 3-10 degrees Celsius. This alternative form of treatment has been around for centuries, made popular by the Scandinavian and Nordic traditions, which consisted of people submerging in cold/ice water to eliminate skin conditions, reduce inflammation, physical injuries, illness, and overall combat a variety of health-related issues.
      </p>

      <h3 className='section-title'>What are the benefits?</h3>
      <ul className='benefits-list section-content'>
        <li
          className={`benefit-badge ${selectedBenefits.includes('Increased energy') ? 'selected' : ''}`}
          onClick={() => toggleBadgeColor('Increased energy')}
        >
          Increased energy
        </li>
        <li
          className={`benefit-badge ${selectedBenefits.includes('Increased immune system strength') ? 'selected' : ''}`}
          onClick={() => toggleBadgeColor('Increased immune system strength')}
        >
          Increased immune system strength
        </li>
        <li
          className={`benefit-badge ${selectedBenefits.includes('Weight loss (Brown fat production)') ? 'selected' : ''}`}
          onClick={() => toggleBadgeColor('Weight loss (Brown fat production)')}
        >
          Weight loss (Brown fat production)
        </li>
        <li
          className={`benefit-badge ${selectedBenefits.includes('Reduced inflammation') ? 'selected' : ''}`}
          onClick={() => toggleBadgeColor('Reduced inflammation')}
        >
          Reduced inflammation
        </li>
        <li
          className={`benefit-badge ${selectedBenefits.includes('Hormone regulation') ? 'selected' : ''}`}
          onClick={() => toggleBadgeColor('Hormone regulation')}
        >
          Hormone regulation
        </li>
        <li
          className={`benefit-badge ${selectedBenefits.includes('Improves sleep') ? 'selected' : ''}`}
          onClick={() => toggleBadgeColor('Improves sleep')}
        >
          Improves sleep
        </li>
        <li
          className={`benefit-badge ${selectedBenefits.includes('Muscle/training recovery') ? 'selected' : ''}`}
          onClick={() => toggleBadgeColor('Muscle/training recovery')}
        >
          Muscle/training recovery
        </li>
        <li
          className={`benefit-badge ${selectedBenefits.includes('Eases symptoms of depression and anxiety') ? 'selected' : ''}`}
          onClick={() => toggleBadgeColor('Eases symptoms of depression and anxiety')}
        >
          Eases symptoms of depression and anxiety
        </li>
        <li
          className={`benefit-badge ${selectedBenefits.includes('Improves the body’s breathing response through times of high stress, trauma, and PTSD') ? 'selected' : ''}`}
          onClick={() => toggleBadgeColor('Improves the body’s breathing response through times of high stress, trauma, and PTSD')}
        >
          Improves the body’s breathing response through times of high stress, trauma, and PTSD
        </li>


      </ul>

      <img src={CodeExposurePhoto} alt="CodeExposure_Photo" className='exposure-photo' />

      <h3 className='section-title'>What can I expect from guided cold immersion?</h3>
      <p className='section-content'>
        Before getting into the ice bath, I will be asking you a few questions related to your overall health and emotional well-being. I will then guide you through some breathing techniques that you will utilize before and during your cold immersion experience. You will step into the water and immediately submerge your body up to your neck. Upon submersion, your body will start to produce hormones related to the “fight or flight” (sympathetic NS) response. Using the breathing techniques that you were taught is imperative to helping your nervous system shift. This shift will usually take 30-90 seconds.
      </p>
      <p className='section-content'>
        After this shift occurs, you will likely experience a sense of deep mental focus as if you are tuning out everything else around you. At this time, you may start to feel a sense of calm come over you as blood flow is shunted to your core, causing a tingling sensation in your extremities. All of these sensations are a normal part of your experience. The practice of cold immersion should never cause pain but will likely be uncomfortable at times. Through this practice, you will discover that it is only through discomfort that we can truly grow. The total amount of time spent in cold immersion varies on the individual, but 2-3 minutes is all one needs to reap the benefits of this practice.

      </p>
    </div>
  );
}

export default ColdExposure;


