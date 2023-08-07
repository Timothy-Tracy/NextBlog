import { format } from "date-fns";

export const defaultTemplate = 
`---
date: ${format(Date.now(), 'LLLL d, yyyy')}
title: "Title"
featured: true
draft: false
tags:
  - tag1
  - tag2
summary: "Summary"
---
`;