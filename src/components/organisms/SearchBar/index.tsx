"use client";

import Form, { Field, Textfield } from "@/components/atoms/Form";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Link } from "next-view-transitions";

interface ISearchBar {
  clickable?: boolean;
}

export default function SearchBar({ clickable = false }: ISearchBar) {
  if (clickable) {
    return (
      <Link href="/search" style={{ viewTransitionName: "SearchBar" }}>
        <div className="justify-between horizontal items-center gap-2 w-full bg-input px-3.5 py-2.5 rounded-lg ring-1 shadow-xs">
          <span className="text-gray-500">Search something...</span>
          <MagnifyingGlassIcon width={24} height={24} />
        </div>
      </Link>
    );
  }

  return (
    <>
      <Form
        method="GET"
        className="flex-1"
        style={{ viewTransitionName: "SearchBar" }}
      >
        <Field name="search" autoFocus>
          <Textfield
            title="Search something..."
            placeholder="Search something..."
            autoFocus
            slots={{
              trailing: (
                <button type="submit" title="Search Icon">
                  <MagnifyingGlassIcon width={24} height={24} />
                  <span className="sr-only">Search Icon</span>
                </button>
              ),
            }}
            // data-invalid
          />
        </Field>
      </Form>
    </>
  );
}
