import {useState} from 'react'

function ExperienceCard ({title, company, date, summary, details}) {
    const [open, setOpen] = useState(false);

    return (
        <li className="ml-4">
            <div className="absolute -left-2 w-4 h-4 bg-blue-600 rounded-full border-2 border-white"></div>
            <h3 className="text-xl font-semibold text-black">{title} @ {company}</h3>
            <span className="text-sm text-black">{date}</span>
            <p className="mt-2 text-back">{summary}</p>
            <button
                onClick={() => setOpen(!open)}
                className="mt-2 text-blue-600 hover:underline text-sm"
            >
                {open ? 'Hide details ▲' : 'Show details ▼'}
            </button>
            {open && (
                <ul className="mt-2 list-disc list-inside text-gray-900 text-sm space-y-1">
                {details.map((point, i) => (
                    <li key={i}>{point}</li>
                ))}
                </ul>
            )}
        </li>
    );
}

export default function Experience() {
    return (
      <section id="experience" className="min-h-[60vh] flex flex-col md:flex-row">
        <div className="md:w-1/3 w-full flex items-center justify-center text-black p-10">
          <div className="text-center md:text-left max-w-md">
            <h2 className="text-4xl font-bold mb-4">Experience</h2>
          </div>
        </div>
  
        <div className="md:w-2/3 w-full bg-white p-10">
          <ol className="relative border-l border-gray-300 space-y-8">
            <ExperienceCard
              title="Software Engineer"
              company="ZipRecruiter"
              date="Aug 2023 — Present"
              summary="Led multiple backend initiatives around messaging scale, experimentation, and SMS infrastructure."
              details={[
                'Promoted from Software Engineer 2 to Software Engineer 3 in September 2024',
                'Built high-scale backend systems that process 15–20 million daily outbound email and SMS messages, using Flink, Spark, Kafka, ProtoBuf, Spring Boot, gRPC, REST APIs',
                'Led design and delivery of key features in a centralized messaging platform, like message detail hydration and cross-team integrations, improving scalability, reducing latency, and enhancing user experience',
                'Optimized infrastructure in Go, streamlining eligibility processing and ensuring compliance with legal requirements, resulting in a 7× increase in SMS audience and significant growth in user engagement',
                'Spearheaded A/B testing infrastructure to automate experimentation, reducing development time from 1 week to 1 hour; Implemented experiments in Scala, Java, and Python',
                'Dedicated 20% time to ZipRecruiter’s Data Guild, contributing infrastructure for company-wide data governance',
                'Mentored engineers, led knowledge-sharing sessions, and improved documentation to foster collaboration and streamline workflows; Participated in on-call rotations',
              ]}
            />
          </ol>
        </div>
      </section>
    );
  }