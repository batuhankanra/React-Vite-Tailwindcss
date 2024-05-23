import { resourcesLinks,platformLinks,communityLinks } from "../constants"

export default function Footer() {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
                <h3 className="text-md font-semibold mb-4">Rosources</h3>
                <ul className="space-y-2">
                    {resourcesLinks.map((link,i)=>(
                        <li key={i}>
                            <a className="text-neutral-300 hover:text-white" href="#">{link.text} </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="text-md font-semibold mb-4">Platform</h3>
                <ul className="space-y-2">
                    {platformLinks.map((link,i)=>(
                        <li key={i}>
                            <a className="text-neutral-300 hover:text-white" href="#">{link.text} </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="text-md font-semibold mb-4">Community</h3>
                <ul className="space-y-2">
                    {communityLinks.map((link,i)=>(
                        <li key={i}>
                            <a className="text-neutral-300 hover:text-white" href="#">{link.text} </a>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    </footer>
  )
}
