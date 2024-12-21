"use client";

import { useState } from "react";
import { RefreshCw, Plus, Search, Database } from "lucide-react";
import { Button } from "../_components/ui/button";
import { Input } from "../_components/ui/input";
import Sidebar from "../_components/sidebar";
import { repositories } from "@/public/data";

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRepositories = repositories.filter((repo) =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="flex h-screen bg-[#FAFAFA]">
      <Sidebar />
      <section className="flex-1 bg-white m-4 rounded-lg border-2 border-[#E9EAEB] overflow-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex flex-col">
              <h1 className="text-2xl font-semibold">Repositories</h1>

              <span className="text-sm text-muted-foreground">
                {repositories.length} total repositories
              </span>
            </div>

            <div className="flex gap-2 text-[#414651]">
              <Button className="flex gap-2" intent="outline" size="md">
                <RefreshCw width={20} height={20} />
                <span>Refresh All</span>
              </Button>
              <Button className="flex gap-2" size="md">
                <Plus />
                <span>Add Repository</span>
              </Button>
            </div>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4" />
            <Input
              placeholder="Search Repositories"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>

        <div>
          {filteredRepositories.map((repo) => (
            <div
              key={repo.name}
              className="p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <h2 className="font-medium text-xl">{repo.name}</h2>
                    <span className="text-[14px] text-[#175CD3] border bg-[#EFF8FF] border-[#B2DDFF] rounded-full px-2 py-0.5">
                      Public
                    </span>
                  </div>
                  <div className="flex gap-5 text-base">
                    <span className="flex items-center">
                      <p className="">{repo.language}</p>
                      <span className="ml-2 h-2 w-2 inline-flex rounded-full bg-[#1570EF]"></span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Database width={10.5} height={12} /> {repo.size}
                    </span>
                    <span>Updated {repo.updatedAt}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
