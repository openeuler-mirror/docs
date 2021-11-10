# Kubernetes Cluster Deployment Guide

This document describes how to deploy a Kubernetes cluster in binary mode on openEuler.

Note: All operations in this document are performed using the `root` permission.

## Cluster Status

The cluster status used in this document is as follows:

- Cluster structure: six VMs running the `openEuler 21.09` OS, three master nodes, and three nodes.
- Physical machine: `x86/ARM` server of `openEuler 21.09`.
