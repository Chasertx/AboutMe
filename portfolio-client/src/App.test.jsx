import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import App from './App'

const sampleProfile = {
  name: 'Chase Ashby',
  title: 'Lead Software Engineer',
  location: 'Atlanta, GA',
  email: 'chaseashby199@gmail.com',
  headline: 'I build scalable software, AI-enabled workflows, and resilient cloud systems that support real business outcomes.',
  summary: 'I’m a software engineer with a B.S. in Computer Science, specializing in full-stack development, cloud architecture, and AI-assisted engineering across financial services, retail, and defense environments.',
  highlights: ['Lead Software Engineer at Fiserv', 'AI + .NET architecture'],
  skills: ['C#', '.NET', 'React'],
  projects: [
    {
      name: 'Financial Systems Modernization',
      description: 'Led platform modernization work across mission-critical financial applications.',
      category: 'Finance',
      stack: ['.NET', 'Azure'],
      liveUrl: 'https://example.com/live',
      repoUrl: 'https://example.com/repo',
    },
  ],
  experience: [
    {
      role: 'Lead Software Engineer',
      company: 'Fiserv',
      period: 'April 2026 — Present',
      description: 'Spearheaded technical interviewing and hiring for senior engineers.',
    },
  ],
  socialLinks: [
    { label: 'GitHub', url: 'https://github.com/Chasertx', icon: 'gh' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/chase-ashby-bs-cs-664a6217a/', icon: 'in' },
    { label: 'Email', url: 'mailto:chaseashby199@gmail.com', icon: 'mail' },
  ],
}

describe('App portfolio rendering', () => {
  beforeEach(() => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => sampleProfile,
    })
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders the portfolio profile from the API response', async () => {
    render(<App />)

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /Chase Ashby/i })).toBeInTheDocument()
    })

    expect(screen.getByRole('heading', { level: 2, name: /Lead Software Engineer/i })).toBeInTheDocument()
    expect(screen.getByText(/Available for select opportunities/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /View projects/i })).toHaveAttribute('href', '#projects')
    expect(screen.getByRole('img', { name: /Chase Ashby profile/i })).toBeInTheDocument()
  })

  it('falls back to the default profile when the API request fails', async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error('Network error'))

    render(<App />)

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /Chase Ashby/i })).toBeInTheDocument()
    })

    expect(screen.getByText(/I build scalable software/i)).toBeInTheDocument()
    expect(screen.getByText(/Lead Software Engineer at Fiserv/i)).toBeInTheDocument()
  })

  it('shows the project section and core contact links', async () => {
    render(<App />)

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /Selected builds/i })).toBeInTheDocument()
    })

    expect(screen.getByRole('heading', { name: /Financial Systems Modernization/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /GitHub/i })).toHaveAttribute('href', 'https://github.com/Chasertx')
    expect(screen.getByRole('link', { name: /LinkedIn/i })).toHaveAttribute('href', 'https://www.linkedin.com/in/chase-ashby-bs-cs-664a6217a/')
  })
})
