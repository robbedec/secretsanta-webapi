using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SecretSantaAPI.Data
{
    public class SecretSantaDataInitializer
    {
        private readonly SecretSantaContext _dbContext;

        public SecretSantaDataInitializer(SecretSantaContext dbContext)
        {
            _dbContext = dbContext;
        }

        public void InitializeData()
        {

        }
    }
}
