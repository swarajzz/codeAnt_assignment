import { useState } from "react";
import { RefreshCw, Plus, Search, Database } from "lucide-react";
import { Button } from "../_components/ui/button";
import { Input } from "../_components/ui/input";
import Sidebar from "../_components/sidebar";
import { repositories } from "@/public/data";
import Hamburger from "../_components/hamburger";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRepositories = repositories.filter((repo) =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main className="flex h-screen bg-[#FAFAFA]">
      <Sidebar />
      <section className="flex-1 m-6 overflow-auto scrollbar-none">
        <Hamburger
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          toggleMenu={toggleMenu}
        />
        {isOpen && (
          <div
            className="md:hidden absolute inset-0 bg-black bg-opacity-50"
            onClick={toggleMenu}
          />
        )}
        <div className=" border overflow-hidden rounded-xl border-[#E9EAEB] bg-white">
          <div className="p-6 pt-16 md:p-6 rounded-t-xl border-b border-[#E9EAEB]">
            <div className="flex items-start flex-col lg:flex-row lg:items-center gap-2 justify-between mb-4">
              <div className="flex flex-col gap-1">
                <h1 className="text-2xl text-primary-300 font-semibold">
                  Repositories
                </h1>

                <span className="text-sm text-primary-100">
                  {repositories.length} total repositories
                </span>
              </div>

              <div className="flex gap-2 text-[#414651]">
                <Button className="flex gap-2" intent="outline" size="sm">
                  <RefreshCw width={20} height={20} />
                  <span className="text-primary-100">Refresh All</span>
                </Button>
                <Button className="flex gap-2" size="sm">
                  <Plus />
                  <span>Add Repository</span>
                </Button>
              </div>
            </div>

            <div className="relative text-primary-100 max-w-[366px]">
              <Search
                className="absolute left-2 top-2.5 h-5 w-5"
                color="#414651"
              />
              <Input
                placeholder="Search Repositories"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>

          <div className="rounded-b-xl">
            {filteredRepositories.map((repo, index) => (
              <div
                key={repo.name}
                className={`p-4 ${
                  index !== 0 && "border-t border-[#D5D7DA]"
                } hover:bg-accent/50 transition-colors`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2 sm:gap-4">
                    <div className="flex items-center gap-2">
                      <h2 className="font-medium text-lg sm:text-xl">
                        {repo.name}
                      </h2>
                      <span className="text-[14px] text-[#175CD3] border bg-[#EFF8FF] border-[#B2DDFF] rounded-full px-2 py-0.5">
                        {!repo.isPublic ? "Private" : "Public"}
                      </span>
                    </div>
                    <div className="flex gap-5 text-sm sm:text-base">
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
        </div>
      </section>
    </main>
  );
}
