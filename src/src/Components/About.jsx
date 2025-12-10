import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Who I am',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  },
  {
    name: 'Why custom aero',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
  },
  {
    description: 'These eyelids are the first official product under Elfaera.',
  },
]

export default function About() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                What is Elfaera?
              </p>
              <p className="mt-6 text-lg/8 text-gray-700">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                iste dolor cupiditate blanditiis ratione.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="">
                    <dt className="inline font-semibold text-gray-900">
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          
          {/* Image section - choose ONE option: */}
          
          {/* Option 1: Medium size, centered, fits nicely */}
          <img
            alt="About me"
            src="/src/assets/Yuri.PNG"
            className="w-full max-w-md mx-auto rounded-xl shadow-xl ring-1 ring-gray-400/10 object-cover"
          />
          
          {/* Option 2: Smaller size, if you want it tiny */}
          {/* <img
            alt="About me"
            src="/src/assets/Yuri.PNG"
            className="w-full max-w-sm mx-auto rounded-xl shadow-xl ring-1 ring-gray-400/10 object-cover"
          /> */}
          
          {/* Option 3: Keep original proportions but limit container width */}
          {/* <div className="lg:pl-8">
            <img
              alt="About me"
              src="/src/assets/Yuri.PNG"
              className="w-full max-w-lg rounded-xl shadow-xl ring-1 ring-gray-400/10 object-cover"
            />
          </div> */}
        </div>
      </div>
    </div>
  )
}