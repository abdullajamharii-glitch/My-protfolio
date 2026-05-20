'use client'

import { useEffect, useState } from 'react'
import {
  fetchCertificates,
  fetchProjects,
  fetchTechStacks,
} from '@/lib/portfolioService'
import { staticProjects } from '@/lib/staticProjects'

export default function usePortfolio() {
  const [projects, setProjects] = useState<any[]>([])
  const [certificates, setCertificates] =
    useState<any[]>([])
  const [techStacks, setTechStacks] =
    useState<any[]>([])

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadPortfolio()
  }, [])

  const loadPortfolio = async () => {
    const cachedProjects =
      sessionStorage.getItem(
        'portfolioProjects'
      )

    const cachedCertificates =
      sessionStorage.getItem(
        'portfolioCertificates'
      )

    const cachedTechStacks =
      sessionStorage.getItem(
        'portfolioTechStacks'
      )

    if (cachedProjects) {
      const parsed = JSON.parse(cachedProjects)
      // Merge cached projects with static projects to ensure they are immediately present
      const merged = [...staticProjects]
      parsed.forEach((dbProj: any) => {
        const exists = merged.some(
          (sp) => sp.live_url === dbProj.live_url || sp.title.toLowerCase() === dbProj.title.toLowerCase()
        )
        if (!exists) {
          merged.push(dbProj)
        }
      })
      setProjects(merged)
    } else {
      setProjects(staticProjects)
    }

    if (cachedCertificates) {
      setCertificates(
        JSON.parse(cachedCertificates)
      )
    }

    if (cachedTechStacks) {
      setTechStacks(
        JSON.parse(cachedTechStacks)
      )
    }

    try {
      const [
        projectsData,
        certificatesData,
        techStacksData,
      ] = await Promise.all([
        fetchProjects(),
        fetchCertificates(),
        fetchTechStacks(),
      ])

      const dbProjects = projectsData || []
      const mergedProjects = [...staticProjects]

      dbProjects.forEach((dbProj) => {
        const exists = mergedProjects.some(
          (sp) => sp.live_url === dbProj.live_url || sp.title.toLowerCase() === dbProj.title.toLowerCase()
        )
        if (!exists) {
          mergedProjects.push(dbProj)
        }
      })

      setProjects(mergedProjects)
      setCertificates(certificatesData || [])
      setTechStacks(techStacksData || [])

      sessionStorage.setItem(
        'portfolioProjects',
        JSON.stringify(mergedProjects)
      )
      sessionStorage.setItem(
        'portfolioCertificates',
        JSON.stringify(certificatesData || [])
      )
      sessionStorage.setItem(
        'portfolioTechStacks',
        JSON.stringify(techStacksData || [])
      )
    } catch {
      // Supabase not configured — show static projects
      setProjects(staticProjects)
      setCertificates([])
      setTechStacks([])
    }

    setLoading(false)
  }

  return {
    projects,
    certificates,
    techStacks,
    loading,
  }
}