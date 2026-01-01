import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Who I am',
    intro: "My name is Yuri. I’m a builder and designer, and I’ve owned two ZN6s. I’ve completely fallen in love with this chassis and believe it has a long future ahead. My goal is to leave a meaningful mark on its history.",
    description: [
      "My design approach comes from my background in architecture, where I learned to focus on proportion, surface, and how forms exist in real space. I apply that same mindset to every part I make, aiming for clean lines, intentional details, and fitment that respects the car’s original design language.",
      "Everything I build comes from constant iteration. I’m not here to make quick parts. I’m here to create pieces that feel like they belong.",
    ]
  },
  {
    name: 'Why Custom Aero',
    intro: "Most aftermarket aero is made to fit many cars reasonably well. Custom aero is designed to fit one car properly.",
    description: [
      "Elfaera parts are built to complement factory lines, lighting, and proportions — not overpower them. The goal is subtle transformation, not noise.",
    ]
  },
  {
    name: 'The first release',
    intro: "These eyelids are the first official product under Elfaera. They are produced in small batches and released by run.",
    description: [
      "Batch 01 marks the beginning.",
    ]
  }
];

export default function About() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32 mt-[-5rem]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                What is Elfaera?
              </p>
              <p className="mt-6 text-lg/8 text-gray-700">
              Elfaera is a small-batch automotive design studio creating considered aero parts for the Toyota 86 / BRZ / FR-S platform. Every piece is designed around the car itself, scanned, modelled, tested, and refined to prioritise intent over excess.

Elfaera is not mass production. Parts are released in controlled runs, built carefully and deliberately.
              </p>
              <div className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
  {features.map((feature) => (
    <div key={feature.name} className="space-y-6">
      <p className='text-lg/8 font-bold'>{feature.name}</p>
      <p className="text-gray-900">{feature.intro}</p>
      {feature.description.map((paragraph, index) => (
        <p key={index} className="text-gray-900">{paragraph}</p>
      ))}
    </div>
  ))}
</div>
            </div>
          </div>
          <img
            alt="About me"
            src="/images/Yuri.PNG"
            className="w-full max-w-md mx-auto rounded-xl shadow-xl ring-1 ring-gray-400/10 object-cover"
          />
        </div>
      </div>
    </div>
  )
}