# Skinet

## Overview

**Skinet** is an e-commerce platform dedicated to ski products, providing users with a seamless shopping experience. Built with a robust **.NET 8 Web API** for the backend and **Angular 18** for the frontend, ensuring high performance and user satisfaction.

## Features

### Server-Side

- **Technology Stack**: 
  - ASP.NET Core 8 Web API
  - Repository Pattern, Unit of Work Pattern, and Specification Pattern for clean architecture
  - Redis for efficient caching
  - Stripe API for secure payment processing
  - SignalR for real-time notifications
  - Azure SQL for reliable data management

- **Caching and Performance**: Utilizes response caching and invalidation to enhance application speed and responsiveness.

- **Deployment**: Includes YAML configurations for deploying Azure SQL and Redis.

### Client-Side

- **Technology Stack**: 
  - Angular 18 for a dynamic user interface
  - Angular Material for responsive UI components
  - Tailwind CSS for modern styling
  - Lazy loading for optimized performance
  - Client-side integration with Stripe for payment processing

## User Workflow

1. **User Authentication**: Register and log in to access the ski product shop.
2. **Browse Products**: Explore a curated selection of ski products with detailed descriptions.
3. **Shopping Cart**:
   - Add products to the shopping cart.
   - Choose a preferred delivery method during checkout.
   - Complete the checkout by filling out location and cart details.
   - Apply coupons for discounts if applicable.
4. **Order Placement**: Confirm all details and place orders seamlessly.
5. **Admin Dashboard**: Admin users can manage orders, process refunds, and oversee product listings.



### Prerequisites

- [.NET SDK 8](https://dotnet.microsoft.com/download)
- [Node.js](https://nodejs.org/en/download/) (for Angular)
- [Azure SQL Database](https://azure.microsoft.com/en-us/services/sql-database/)
- [Redis](https://redis.io/download)