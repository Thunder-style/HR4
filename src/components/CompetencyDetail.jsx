import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingDown, TrendingUp } from "lucide-react";

const CompetencyDetail = ({ data }) => {
  const { name, 个人, 整体, 差距 } = data;
  
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center justify-between">
          <span>{name}</span>
          {差距 > 0 ? (
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              <span>+{差距}</span>
            </Badge>
          ) : (
            <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200 flex items-center gap-1">
              <TrendingDown className="h-3 w-3" />
              <span>{差距}</span>
            </Badge>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">个人得分</p>
            <p className="text-2xl font-bold">{个人}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">整体平均</p>
            <p className="text-2xl font-bold">{整体}</p>
          </div>
        </div>
        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-blue-600 h-2.5 rounded-full" 
              style={{ width: `${个人}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-1 text-xs text-muted-foreground">
            <span>个人: {个人}</span>
            <span>整体: {整体}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CompetencyDetail;
