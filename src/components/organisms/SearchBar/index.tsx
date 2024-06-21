"use client";

import Button from "@/components/atoms/Button";
import Form, { Field, Textfield } from "@/components/atoms/Form";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Link } from "next-view-transitions";

interface ISearchBar {
  clickable?: boolean;
}

export default function SearchBar({ clickable = false }: ISearchBar) {
  return (
    <>
      <Form
        method="GET"
        className="flex-1"
        style={{ viewTransitionName: "SearchBar" }}
      >
        <Field name="search" autoFocus className="relative">
          {clickable && <Link href="/search" className="absolute inset-0" />}
          <Textfield
            title="Search something..."
            placeholder="Search something..."
            autoFocus={!clickable}
            tabIndex={clickable ? -1 : undefined}
            slots={{
              trailing: (
                <Button
                  isSymbol
                  type="submit"
                  title="Search Icon"
                  tabIndex={clickable ? -1 : undefined}
                >
                  <MagnifyingGlassIcon
                    width={18}
                    height={18}
                    className="text-label-secondary"
                  />
                  <span className="sr-only">Search Icon</span>
                </Button>
              ),
            }}
          />
        </Field>
      </Form>
    </>
  );
}
