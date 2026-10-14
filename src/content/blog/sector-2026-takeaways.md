---
title: "Three things that stuck with me from SecTor 2026"
description: "Back from SecTor in Toronto: why exploitability beats severity scores, why AI agents need identities, and what AI is really replacing."
pubDate: 2026-10-14
category: stay-safe
---

I'm back from SecTor 2026 in Toronto, and three ideas have stayed with me since I got home. None of them need a big budget to act on, so I'm sharing them in plain language.

## 1. Real exploitability matters more than a CVE's severity score

A severity score such as a CVSS rating tells you how bad a flaw could be in theory. It doesn't tell you how likely someone is to use it against *you*. A "critical" flaw on a system nobody can reach may matter less this month than a "medium" one that attackers are already using on the internet.

When you decide what to patch first, ask:

- **Is it being exploited in the real world?** Public lists of known exploited vulnerabilities, such as the one CISA maintains, are a good place to check.
- **Can an attacker actually reach it?** Internet-facing systems come before internal ones.
- **How important is the system?** A flaw on a payment system or domain controller outranks one on a test machine.
- **Is there another control in the way?** A firewall rule or segmentation can lower the real risk.

Severity is a starting point. Exploitability and exposure decide the order.

## 2. AI agents should be secured like any user identity

AI agents are showing up everywhere: reading email, opening tickets, searching documents, running tasks. The key idea is simple. **If an agent has access to something, treat it like a user.** That means:

- Give it its own identity, not a shared admin account.
- Give it only the access it needs (least privilege).
- Use short-lived credentials where you can, and keep secrets out of prompts and code.
- Log what it does, and review those logs.
- Remove its access when the project ends, just as you would when someone leaves the company.

An agent with broad access and no oversight is the same risk as an over-privileged account, only faster.

## 3. AI isn't replacing our teams. It's replacing slow, manual workflows

The workflows that can't keep up are the ones to fix: sorting alerts, correlating logs, routing tickets, producing the weekly patch report. Automating them frees people for what machines do badly, which is judgment, context and deciding what matters to the business.

A good first step is to write down one repetitive task your team does every week and ask what a person still needs to decide in it.

## What you can do this week

1. Pick your five most urgent patches and re-rank them by exploitability and exposure.
2. List every AI tool or agent with access to company data, and note what each one can reach.
3. Choose one manual, repetitive workflow to simplify.

If you were at SecTor too, I'd like to hear what stuck with you. You can reach me on the [contact page](/contact).
