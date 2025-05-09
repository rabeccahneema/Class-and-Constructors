function FeatureToggle (featureName,isEnabled,userGroupAccess){
    this.featureName=featureName;
    this.isEnabled=isEnabled;
    this.userGroupAccess=userGroupAccess;
};

 FeatureToggle.prototype.canAccess=function(userRole){
     return this.userGroupAccess.includes(userRole)


 };

  FeatureToggle.prototype.toogleFeature=function(flag){
    return this.isEnabled=flag
  };

  FeatureToggle.prototype.simulateAccess=function(userRole){
    if(this.isEnabled){
        switch(userRole){
            case "betaTesters":
            console.log(`${userRole} can access the feature:${this.featureName}`);
            break;
            case "admins":
            console.log(`${userRole} can access the feature:${this.featureName}`);
            break;
            case "dailyUser":
            console.log(`${userRole} can access the feature:${this.featureName}`);
            break;
            default:
                console.log(`${userRole} role is undefined  for access.`);

        }
    }else{
        console.log(`The feature: ${this.featureName} is disabled`);
    }
  };

  const featureA=new FeatureToggle("Login",true,["betaTesters","admin"]);
  const userRoles=["betaTesters","admin","dailyUser","unkownRoles"];

  for (const userRole of userRoles){
    featureA.simulateAccess(userRole);
  }

featureA.toogleFeature(false);
 for(const userRole of userRoles){
    featureA.simulateAccess(userRole)
 };


 //question 2

function TimeLog(freeLancerName,projecDetails,logs){
    this.freeLancerName=freeLancerName;
    this.projecDetails=projecDetails;
    this.logs=[];
    
};

TimeLog.prototype.totalEarnings = function(){
     let totalEarnings=0;
     for(const log of this.logs){
        totalEarnings+= this.logs.hoursWorked*this.projecDetails.hourlyRate
     }
     return totalEarnings;

};

TimeLog.prototype.filterLogByDateRange=function(startDate,endDate){
    return this.logs.filter(logs=>{
        const logDate= new Date(log.date);
        return logDate>= new Date(startDate) && logDate <= new date (endDate);
    });

};


    

