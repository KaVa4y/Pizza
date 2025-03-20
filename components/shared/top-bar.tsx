import { cn } from "@/lib/utils";
import { Container } from "./container";
import { Categories } from "./categories";
import { SortPopup } from "./sort-Popup";

interface Props {
    className?: string;
}

export const TopBar: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn('sticky top-0 bg-white', className)}>
            <Container className="flex justify-between">
                <Categories/>
                <SortPopup/>
            </Container>
        </div>
    )
}