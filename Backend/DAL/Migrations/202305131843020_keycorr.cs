﻿namespace DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class keycorr : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Orders", "Product_Id", "dbo.Products");
            DropIndex("dbo.Orders", new[] { "Product_Id" });
            DropColumn("dbo.Orders", "Product_Id");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Orders", "Product_Id", c => c.Int());
            CreateIndex("dbo.Orders", "Product_Id");
            AddForeignKey("dbo.Orders", "Product_Id", "dbo.Products", "Id");
        }
    }
}
