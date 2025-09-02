import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, TrendingDown } from "lucide-react";

const RecommendationCard = ({ data }) => {
  const { competency, score, gap, suggestions } = data;
  
  return (
    <Card className="border-l-4 border-l-red-500">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center justify-between">
          <span>{competency}</span>
          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200 flex items-center gap-1">
            <TrendingDown className="h-3 w-3" />
            <span>{gap}</span>
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm text-muted-foreground">当前得分</span>
            <span className="text-sm font-medium">{score}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-red-500 h-2.5 rounded-full" 
              style={{ width: `${score}%` }}
            ></div>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2 flex items-center gap-1">
            <BookOpen className="h-4 w-4" />
            <span>培养建议</span>
          </h4>
          <ul className="space-y-2">
            {suggestions.map((suggestion, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span>{suggestion}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecommendationCard;
