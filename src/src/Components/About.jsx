import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Who I am',
    intro: "My name is Yuri. I’m a builder and designer, and I’ve now owned two ZN6s — I’ve completely fallen in love with this chassis. I genuinely believe this platform has a long future ahead of it, and my dream is to leave my mark on its history.",
    description: [
      "My passion for design comes from my background as an undergraduate architecture student. Architecture trained the way I see things: proportion, surface, function, and how a form “sits” in real space — not just how it looks in a render. I bring that same mindset into every part I make: clean lines, intentional details, and fitment that respects the car’s original design language while pushing it forward.",
      "Everything I build is the result of obsession-level iteration — scanning, modelling, test fitting, revising, and repeating until it feels right. I’m not here to make quick parts. I’m here to create pieces that feel like they belong, and to contribute something meaningful to the ZN6 community.",
      "This is my way of giving back to the chassis that gave me so much — and the beginning of what I plan to be a long body of work."
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
              Elfaera is a small-batch automotive design studio focused on creating considered aero parts for the Toyota 86 / BRZ / FR-S platform.
Every piece is designed around the car itself — scanned, modelled, tested, and refined to prioritise intent over excess.
Elfaera is not mass production. It’s controlled releases, built carefully and released in runs.
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
            src="/src/assets/Yuri.PNG"
            className="w-full max-w-md mx-auto rounded-xl shadow-xl ring-1 ring-gray-400/10 object-cover"
          />
        </div>
      </div>
    </div>
  )
}