import React, { KeyboardEvent, useState } from 'react'

interface FormData {
  title: string,
  leetcodeLink: string,
  solutionLink: string,
  difficulty: string,
  topic: string
}

function ChallengeCreate() {
  const [topics, setTopics] = useState<string[]>([]);
  const [formData, setFormData] = useState<FormData>({
    title: "",
    leetcodeLink: "",
    solutionLink: "",
    difficulty: "",
    topic: ""
  });

  const { title, leetcodeLink, solutionLink, difficulty, topic } = formData;

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement
    const value = target.value
    setFormData(prev => (
      {
        ...prev,
        [target.id]: value,
      }
    ))
  };

  const enterTopic = (e: KeyboardEvent) => {
    if (e.code !== "Enter") return
    setTopics((prev) => {
      const target = e.target as HTMLInputElement
      const value = target.value
      if (prev.includes(value) || value == null) return prev
      return [...prev, value]
    })
    setFormData(prev => (
      {
        ...prev,
        topic: "",
      }
    ))
  }
  return (
    <form className='flex flex-col gap-4'>
      <input type="text" placeholder='title' className='text-black' value={title} onChange={onChange} id="title" />
      <input type="text" placeholder='leetcodeLink' className='text-black' value={leetcodeLink} onChange={onChange} id="leetcodeLink" />
      <input type="text" placeholder='solutionLink' className='text-black' value={solutionLink} onChange={onChange} id="solutionLink" />
      <input type="text" placeholder='difficulty' className='text-black' value={difficulty} onChange={onChange} id="difficulty" />
      <input type="text" placeholder='topic' className='text-black' value={topic} id="topic" onChange={onChange} onKeyDown={enterTopic} />
    </form >
  )
}






export default ChallengeCreate    