// Create a new file: components/LoadingSkeleton.tsx
'use client'

import React from 'react'
import { Skeleton } from "@sanity/ui"

export const LoadingSkeleton = () => {
    return <Skeleton className="view_skeleton" />
}