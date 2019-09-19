---
title: "Terraform Remote State — The Road to Production"
description: "Using HashiCorp’s new Remote State Management Service."
metadescription: "Using HashiCorp’s new Remote State Management Service."
date: 2019-07-02T00:00:00
tags: ["DevOps", "Terraform", "Infrastructure As Code", "Hashicorp"]
image: "https://cdn-images-1.medium.com/max/2560/1*WxHqGDHrucwN4Tnyzy3p5w.jpeg"
author_name: "Tom Stockton"
author_thumbnail: "/images/tom.jpeg"
author_description: "Co-Founder of Fuzzy Labs"
layout: blog_post
draft: false
---

![](https://cdn-images-1.medium.com/max/2560/1*WxHqGDHrucwN4Tnyzy3p5w.jpeg)

### Brief Intro

HashiCorp recently announced that their [Terraform Cloud Remote State Management](https://www.hashicorp.com/blog/introducing-terraform-cloud-remote-state-management) (TCRSM) service was available, free for all users. Previously it was an Enterprise (get your cheque book out) product only.

Before this was announced, if you wanted to use remote state for Terraform ([you definitely should BTW](https://medium.com/@itsmattburgess/why-you-should-be-using-remote-state-in-terraform-2fe5d0f830e8)) then you would generally use a Cloud File Storage service such as S3 from Amazon or Cloud Storage from Google.

These services worked fine but created a bit of a chicken and egg situation as you would generally want to define all of your Cloud resources using Terraform — inevitably the Cloud Storage Service would have to be created manually (outside of Terraform) before you could run Terraform to provision more Cloud resources.

Using TCRSM removes this dependency and also gives some other benefits over using Cloud Storage.

* Nice visualisation of state file history.

* Common / agnostic method for provisioning *any* cloud resource.

* Easy to upgrade to Terraform Enterprise (if required).

This blog will not go into detail about setting up and configuring TCRSM, there are enough articles about that already — see these for a starter:

* [4 Reasons To Try HashiCorp’s (New) Free Terraform Remote State Storage](https://medium.com/runatlantis/4-reasons-to-try-hashicorps-new-free-terraform-remote-state-storage-b03f01bfd251)

* [Getting Started - Free Tier - Terraform Cloud - Terraform by HashiCorp](https://www.terraform.io/docs/enterprise/free/)

The main point of writing this blog is to outline what we think the best way of organising your state files in TCRSM is.

When dealing with Terraform state files we want to ensure two things.

1. Access to production state files is completely separate from non-production.

1. State files are broken up into smaller entities in order to [reduce the blast radius](https://charity.wtf/2016/03/30/terraform-vpc-and-why-you-want-a-tfstate-file-per-env/) of making changes.

TL;DR

* Use a separate ‘[Organisation](https://learn.hashicorp.com/terraform/cloud/tf_cloud_gettingstarted#create-an-organization)’ for Prod and Non Prod services.

* Use [workspaces.name](https://www.terraform.io/docs/backends/types/remote.html#name) Vs [workspaces.prefix](https://www.terraform.io/docs/backends/types/remote.html#prefix)

### Use a separate Organisation for Prod and Non Prod services

We want to ensure that changes made to non-production environments (by developers, testers etc.) have **no chance** of accidentally making changes in production. In order to achieve this we create a separate TCRSM organisation to host production state files and only add specific users that we want to be able to make production changes to that organisation.

We create an organisation called ‘fuzzylabs’ for non prod and ‘fuzzylabs-prod’ for (you guessed it) prod.

![](https://cdn-images-1.medium.com/max/2000/1*n0sazXhj6xoDI7B7wS1-Dg.png)

### Use workspaces.name Vs workspaces.prefix

When configuring the Terraform Cloud ‘[remote](https://www.terraform.io/docs/backends/types/remote.html)’ as the backend for, you have an option of defining the ‘[workspace](https://www.terraform.io/docs/backends/types/remote.html#workspace)’ attribute as either ‘[name](https://www.terraform.io/docs/backends/types/remote.html#name)’ or ‘[prefix](https://www.terraform.io/docs/backends/types/remote.html#prefix)’.

Using prefix allows you to use the native [workspaces](https://www.terraform.io/docs/state/workspaces.html) functionality of Terraform. Not to be confused with the ‘workspace’ attribute of the remote backend, ‘workspaces’ is a Terraform feature that is [recommended](https://www.terraform.io/docs/state/workspaces.html#when-to-use-multiple-workspaces) for creating temporary environments used for testing. However it is not recommended for separating persistent environments that you will typically use in your development workflow (dev, staging, prod).

Therefore we recommend not using ‘prefix’ and instead specifying a static ‘name’ for each component that you want to create ie. ‘dev-vpc’

### Let’s have a look at some code

Defining the remote state for a VPC (virtual private network) in dev.

    # dev/vpc/remote-state.tf

    terraform {
      backend "remote" {
        organization = "fuzzylabs"

        workspaces {
          name = "dev-vpc"
        }
      }
    }

Same again, but this time for prod. Note the usage of a different ‘organization’ and ‘workspace.name’.

    # prod/vpc/remote-state.tf

    terraform {
      backend "remote" {
        organization = "fuzzylabs-prod"

        workspaces {
          name = "prod-vpc"
        }
      }
    }

For a comprehensive overview of how to lay out and organise your Terraform code, check out [this great article from Gruntwork](https://blog.gruntwork.io/terragrunt-how-to-keep-your-terraform-code-dry-and-maintainable-f61ae06959d8). In the meantime, I hope you found this (at least mildly) useful. Please let us know if you think it was good or otherwise.
