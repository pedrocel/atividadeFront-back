import { Controller, Get, Post, Put, Delete, Body, Param } from "@nestjs/common";
import { DashboardService } from "./dashboard.service";

@Controller("dashboard")
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get()
  async getAll() {
    return await this.dashboardService.getAll();
  }

}