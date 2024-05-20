import Container from "@/components/atoms/Container";
import Toolbar from "@/components/molecules/Toolbar";
import SearchBar from "@/components/organisms/SearchBar";
import { ArchiveIcon } from "@radix-ui/react-icons";

export default function HomePage() {
  return (
    <>
      <Toolbar
        slots={{
          trailing: (
            <>
              <ArchiveIcon width={24} height={24} />
            </>
          ),
        }}
        title="Delicious Food For You"
      />
      <Container className="flex-1 gap-4 vertical">
        <div className="search-bar">
          <SearchBar clickable />
        </div>
        {/* MARK: Fake content */}
        <div className="bg-red-400 text-white py-4 px-6 rounded-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          quidem delectus aperiam dolore autem nostrum rerum optio eius
          exercitationem voluptatibus minus ratione consectetur recusandae dicta
          officiis, nobis consequuntur culpa sed!
        </div>
        <div className="bg-blue-400 text-white py-4 px-6 rounded-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          quidem delectus aperiam dolore autem nostrum rerum optio eius
          exercitationem voluptatibus minus ratione consectetur recusandae dicta
          officiis, nobis consequuntur culpa sed!
        </div>
        <div className="bg-green-400 text-white py-4 px-6 rounded-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          quidem delectus aperiam dolore autem nostrum rerum optio eius
          exercitationem voluptatibus minus ratione consectetur recusandae dicta
          officiis, nobis consequuntur culpa sed!
        </div>
        <div className="bg-amber-400 text-white py-4 px-6 rounded-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          quidem delectus aperiam dolore autem nostrum rerum optio eius
          exercitationem voluptatibus minus ratione consectetur recusandae dicta
          officiis, nobis consequuntur culpa sed!
        </div>
        <div className="bg-violet-400 text-white py-4 px-6 rounded-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          quidem delectus aperiam dolore autem nostrum rerum optio eius
          exercitationem voluptatibus minus ratione consectetur recusandae dicta
          officiis, nobis consequuntur culpa sed!
        </div>
        <div className="bg-gray-400 text-white py-4 px-6 rounded-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          quidem delectus aperiam dolore autem nostrum rerum optio eius
          exercitationem voluptatibus minus ratione consectetur recusandae dicta
          officiis, nobis consequuntur culpa sed!
        </div>
        <div className="bg-yellow-400 text-white py-4 px-6 rounded-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          quidem delectus aperiam dolore autem nostrum rerum optio eius
          exercitationem voluptatibus minus ratione consectetur recusandae dicta
          officiis, nobis consequuntur culpa sed!
        </div>
        <div className="bg-teal-400 text-white py-4 px-6 rounded-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          quidem delectus aperiam dolore autem nostrum rerum optio eius
          exercitationem voluptatibus minus ratione consectetur recusandae dicta
          officiis, nobis consequuntur culpa sed!
        </div>
      </Container>
    </>
  );
}
